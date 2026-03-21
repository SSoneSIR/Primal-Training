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
    <div className={`flex min-w-0 flex-1 flex-col p-6 md:p-5 lg:p-6 ${className}`}>
      <div className=" text-2xl sm:text-4xl md:text-3xl lg:text-4xl font-bold">
        {titleLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="mt-2 sm:mt-50 md:mt-8 lg:mt-50 w-full text-base font-normal text-foreground">
        <p className="leading-relaxed">{description}</p>
      </div>
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
