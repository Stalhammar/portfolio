type CardProps = {
  text: string;
};

function Card({ text }: CardProps) {
  return (
    <div className="bg-surface p-10 border-2 rounded-xl flex items-center justify-center cursor-pointer transition hover:scale-102 w-70 h-50">
      <div className="">
        <h2 className="font-serif text-2xl font-semibold">{text}</h2>
      </div>
    </div>
  );
}

export default Card;
