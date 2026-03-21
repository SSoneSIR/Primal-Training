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
}: TitleTextCard2Props) {
  return (
    <div className={`flex flex-col border-b px-6 py-3 sm:px-6 sm:py-8 md:px-5 md:py-5 lg:px-6 lg:py-8 ${className}`}>
      <div className="font-bold text-xl md:text-lg lg:text-xl">
        {title.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div>
        <p className="md:text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
}
