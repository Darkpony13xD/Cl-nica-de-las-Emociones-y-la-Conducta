import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingContactButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-40 md:hidden"
    >
      <button className="w-14 h-14 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-2xl">
        <MessageCircle size={30} />
      </button>
    </motion.div>
  );
}
