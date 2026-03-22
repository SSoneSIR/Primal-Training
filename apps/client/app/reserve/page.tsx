import TitleTextCard3 from "../../components/shared/card/title-text-card3";
import Button from "../../components/ui/button";
const sessionCards = [
  {
    title: ["STRENGTH"],
    scheduleLines: ["Weekdays at 6AM", "Weekends and Holidays at 8AM"],
    description:
      "Build a foundation of raw power with our comprehensive weightlifting and strength training programs.",
  },
  {
    title: ["CONDITIONING"],
    scheduleLines: ["Weekdays at 8AM", "Weekends and Holidays at 10AM"],
    description:
      "Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness.",
  },
  {
    title: ["COMMUNITY", "CLASSES"],
    scheduleLines: ["Every day on the hour"],
    description:
      "Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside like-minded individuals.",
  },
];

export default function ReservePage() {
  return (
    <main>
      <div className="border-b px-6 py-2 sm:p-3">
        <div className="flex gap-3 text-3xl font-bold sm:text-8xl sm:leading-tight md:text-6xl lg:text-8xl">
          <h1 className="whitespace-nowrap">BOOK A</h1>
          <h1 className="whitespace-nowrap text-accent">SESSION</h1>
        </div>
      </div>

      <section className="border-b">
        <div className="grid border-t lg:grid-cols-3">
          {sessionCards.map((card, index) => (
            <TitleTextCard3
              key={card.title.join("-")}
              title={card.title}
              scheduleLines={card.scheduleLines}
              description={card.description}
              className={`border-b lg:border-b-0 ${
                index === sessionCards.length - 1 ? "" : "lg:border-r"
              }`}
            />
          ))}
        </div>
      </section>
      <section
        id="reserve"
        className="flex flex-col items-center gap-2 bg-accent px-2 py-20 text-center sm:gap-6 sm:p-40 md:px-12 md:py-24 lg:p-40"
      >
        <h2 className="text-3xl font-bold leading-none sm:max-w-none sm:text-6xl md:max-w-3xl md:text-5xl lg:max-w-none lg:text-6xl">
          <span>PRIMAL PERSONAL TRAINING</span>
          <span className="sm:hidden block sm:ml-3">
            PRIMAL PERSONAL TRAINING
          </span>
        </h2>
        <p className="text-base leading-tight font-semibold sm:text-lg">
          Receive personalized guidance and tailored programs designed to unlock
          your individual primal potential. Our expert coaches will guide you
          every step of the way.{" "}
        </p>
        <Button
          className="mx-auto mt-2 w-fit  bg-accent-foreground hover:bg-foreground hover:text-background"
          type="button"
        >
          RESERVE YOUR SPOT
        </Button>
      </section>
    </main>
  );
}
