import { motion } from "motion/react";

type CardProps = {
  text: string;
};

function Card({ text }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-surface p-10 border-2 rounded-xl flex items-center justify-center cursor-pointer w-70 h-50"
    >
      <div className="">
        <h2 className="font-serif text-2xl font-semibold">{text}</h2>
      </div>
    </motion.div>
  );
}

export default Card;
