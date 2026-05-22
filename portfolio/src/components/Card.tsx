import { motion } from "motion/react";
import { Link } from "react-router-dom";

type CardProps = {
  text: string;
  to: string;
};

function Card({ text, to }: CardProps) {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{
          scale: 1.02,
          backgroundColor: "var(--color-surface-hover)",
        }}
        className="bg-surface p-10 border-2 rounded-xl flex items-center justify-center cursor-pointer w-70 h-50"
      >
        <div className="">
          <h2 className="font-serif text-2xl font-semibold">{text}</h2>
        </div>
      </motion.div>
    </Link>
  );
}

export default Card;
