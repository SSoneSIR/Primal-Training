import type { ReactNode } from "react";

type TitleTextCardProps = {
  titleLines: string[];
  description: string;
  className?: string;
  children?: ReactNode;
};
export default function TitleTextCard({
  titleLines,
  description,
  className = "",
  children,
}: TitleTextCardProps) {
  return (
    <div className={`flex min-w-0 flex-1 flex-col p-6 ${className}`}>
      <div className="text-4xl font-bold">
        {titleLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="mt-50 w-full p-2 text-base font-normal text-foreground">
        <p className="leading-relaxed">{description}</p>
      </div>
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
