import Button from "../../ui/button";

type TitleTextCard3Props = {
  title: string[];
  scheduleLines: string[];
  description: string;
  buttonLabel?: string;
  className?: string;
};

export default function TitleTextCard3({
  title,
  scheduleLines,
  description,
  buttonLabel = "RESERVE YOUR SPOT",
  className = "",
}: TitleTextCard3Props) {
  return (
    <article
      className={`flex h-full min-w-0 flex-col bg-muted-foreground px-8 py-8 sm:px-10 sm:py-10 ${className}`}
    >
      <h2 className="text-4xl font-bold leading-none sm:text-5xl">
        {title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      <div className="mt-12 space-y-5 text-lg leading-snug sm:mt-16 sm:text-xl">
        {scheduleLines.map((line) => (
          <p key={line} className="border-b pb-3">
            {line}
          </p>
        ))}
      </div>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground sm:text-xl">
        {description}
      </p>

      <div className="mt-auto pt-14">
        <Button className="w-full" type="button">
          {buttonLabel}
        </Button>
      </div>
    </article>
  );
}
