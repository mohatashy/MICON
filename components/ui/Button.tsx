import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  theme?: "light" | "dark";
  className?: string;
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  theme = "light",
  className = "",
}: ButtonProps) {
  const base = `
    inline-flex
    items-center
    justify-center
    rounded-full
    px-10
    py-5
    text-[16px]
    font-semibold
    transition-all
    duration-300
  `;

  const variants = {
    primary:
      theme === "dark"
        ? `
          bg-orange-500
          text-white
          hover:bg-orange-400
          hover:shadow-[0_15px_40px_rgba(234,91,31,.35)]
          hover:-translate-y-0.5
        `
        : `
          bg-orange-600
          text-white
          hover:bg-orange-700
          hover:shadow-xl
          hover:-translate-y-0.5
        `,

    outline:
      theme === "dark"
        ? `
          border
          border-white/15
          text-white
          hover:border-orange-500
          hover:bg-orange-500
        `
        : `
          border-2
          border-orange-600
          text-orange-600
          hover:bg-orange-600
          hover:text-white
        `,
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}