type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
}: SectionTitleProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-4xl text-center"
          : "max-w-3xl"
      }
    >
      {/* EYEBROW */}

      {eyebrow && (
        <span
          className={`
            inline-flex
            items-center
            rounded-full
            border
            px-5
            py-2
            text-[11px]
            font-bold
            uppercase
            tracking-[0.22em]
            ${
              isDark
                ? "border-orange-500/20 bg-orange-500/10 text-orange-400"
                : "border-orange-200 bg-orange-50 text-orange-600"
            }
          `}
        >
          {eyebrow}
        </span>
      )}

      {/* TITLE */}

      <h2
        className={`
          mt-7
          text-[42px]
          font-black
          leading-[1.05]
          tracking-[-0.04em]
          lg:text-[56px]
          ${
            isDark
              ? "text-white"
              : "text-slate-900"
          }
        `}
      >
        {title}
      </h2>

      {/* SUBTITLE */}

      {subtitle && (
        <p
          className={`
            mt-7
            max-w-3xl
            text-[17px]
            font-medium
            leading-8
            ${
              isDark
                ? "!text-[#AEB6C2]"
                : "text-gray-600"
            }
            ${align === "center" ? "mx-auto" : ""}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}