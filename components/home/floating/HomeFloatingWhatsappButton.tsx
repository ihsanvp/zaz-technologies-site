import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { motion } from "framer-motion";

export default function HomeFloatingWhatsappButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="hidden md:block fixed bottom-3 sm:bottom-5 right-3 sm:right-5 z-10"
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={
          //   `https://wa.me/+917994152171?text=${encodeURIComponent(
          //   "I'd like to chat with you"
          // )}`
          ""
        }
        className="p-3 flex items-center justify-center rounded-full bg-green-500 text-white shadow"
      >
        <FaWhatsapp size="30" />
      </a>
    </motion.div>
  );
}
