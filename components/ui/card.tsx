type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        card
        rounded-2xl
        bg-white
        p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}