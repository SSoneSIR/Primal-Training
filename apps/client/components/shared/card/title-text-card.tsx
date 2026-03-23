import type { ReactNode } from "react";

type TitleTextCardProps = {
  titleLines: string[];
  description: string;
  className?: string;
  descriptionTop?: ReactNode;
  children?: ReactNode;
};
export default function TitleTextCard({
  titleLines,
  description,
  className = "",
  descriptionTop,
  children,
}: TitleTextCardProps) {
  return (
    <article
      className={`flex h-full min-w-0 flex-1 flex-col px-8 py-8 sm:px-10 sm:py-10 ${className}`}
    >
      <h2 className="text-4xl font-bold leading-none sm:text-4xl">
        {titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      <div className="mt-12 w-full max-w-xl text-lg leading-relaxed text-foreground sm:mt-16 sm:text-lg">
        {descriptionTop ? <div className="mb-4">{descriptionTop}</div> : null}
        <p>{description}</p>
      </div>

      {children ? <div className="mt-auto pt-14">{children}</div> : null}
    </article>
  );
}
