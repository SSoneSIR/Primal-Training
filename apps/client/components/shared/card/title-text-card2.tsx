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
    <div className={`flex flex-col border-b px-6 py-3 sm:px-6 sm:py-8  ${className}`}>
      <div className="font-bold text-xl">
        {title.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div>
        <p className="">{description}</p>
      </div>
    </div>
  );
}
