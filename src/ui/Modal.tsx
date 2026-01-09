import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ open, title, onClose, children }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* overlay */}
        <button
          aria-label="Cerrar"
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />

        {/* modal */}
        <motion.div
          role="dialog"
          aria-modal="true"
          className="no-particles relative w-full sm:max-w-3xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden"
          initial={{ y: 30, scale: 0.98, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 20, scale: 0.98, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            {title ? (
              <h3 className="text-xl font-bold serif truncate">{title}</h3>
            ) : (
              <div />
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-gray-100 transition"
              aria-label="Cerrar modal"
            >
              <X />
            </button>
          </div>

          <div className="px-6 py-6 max-h-[80vh] overflow-y-auto">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
