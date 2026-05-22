import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { MdClose } from "react-icons/md";

function BackButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate("/")}
      whileHover={{
        scale: 1.02,
        backgroundColor: "var(--color-surface-hover)",
      }}
      className="bg-surface p-2 border-2 rounded-xl"
    >
      <MdClose className="w-8 h-8" />
    </motion.button>
  );
}

export default BackButton;
