import type { ReactNode } from "react";

type TitleTextCard2Props = {
  title: string[];
  description: string;
  className?: string;
  children?: ReactNode;
};
export default function TitleTextCard2({
  title,
  description,
  className = "",
  children,
}: TitleTextCard2Props) {
  return (
    <article
      className={`flex h-full min-w-0 flex-col border-b px-8 py-6 sm:px-10 sm:py-8 ${className}`}
    >
      <h3 className="text-2xl font-bold leading-none sm:text-2xl">
        {title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>

      <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg">
        {description}
      </p>

      {children ? <div className="mt-auto pt-8">{children}</div> : null}
    </article>
  );
}
