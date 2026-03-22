import Image from "next/image";

import Button from "../../components/ui/button";
import TitleTextCard from "../../components/shared/card/title-text-card";
import { aboutFacilityCards, aboutIntroCards } from "../../lib/data/about";

export default function AboutUsPage() {
  return (
    <main>
      <div className="border-b-2">
        <div className="mb-4 text-3xl font-bold p-6 pb-0 sm:text-8xl md:text-6xl lg:text-8xl">
          <h1 className="whitespace-nowrap">ABOUT US</h1>
        </div>
      </div>
      <section>
        <div className="flex flex-wrap sm:justify-between">
          {aboutIntroCards.map((card) => (
            <TitleTextCard
              key={card.key}
              titleLines={card.titleLines}
              description={card.description}
              className={card.className}
              descriptionTop={
                card.descriptionTopLabel ? (
                  <p className={card.descriptionTopClassName}>
                    {card.descriptionTopLabel}
                  </p>
                ) : undefined
              }
            />
          ))}
          <Image
            src="/Image4.jpg"
            alt="Two athletes fist-bumping beside a loaded barbell"
            width={380}
            height={479}
            className="w-full order-0 object-contain sm:order-1 sm:mx-0 sm:w-95 sm:max-w-none sm:shrink-0 md:w-72 lg:w-95 sm:object-cover"
          />
        </div>
      </section>
      <section id="about" className="flex flex-col sm:flex-row">
        <Image
          src="/image5.jpg"
          alt="Athlete setting up for a barbell deadlift"
          width={900}
          height={400}
          className="h-auto w-full object-cover sm:h-128 sm:w-225 md:h-auto md:w-140 lg:h-128 lg:w-225"
        />
        {aboutFacilityCards.map((card) => (
          <TitleTextCard
            key={card.key}
            titleLines={card.titleLines}
            description={card.description}
            className={card.className}
          />
        ))}
      </section>
      <section>
        <div className="relative overflow-hidden">
          <Image
            src="/Reconnect section.png"
            alt="Athlete pressing a barbell overhead in a squat rack"
            width={900}
            height={400}
            className="h-120 w-full object-cover sm:h-auto sm:object-contain"
          />
        </div>
      </section>
      <section
        id="reserve"
        className="flex flex-col items-center gap-2 bg-muted-foreground px-2 py-20 text-center sm:gap-6 sm:p-40 md:px-12 md:py-24 lg:p-40"
      >
        <p className="text-base leading-loose font-semibold sm:text-lg">
          WHAT WE BELIEVE IN
        </p>
        <h2 className="text-3xl font-bold leading-none sm:max-w-none sm:text-6xl md:max-w-3xl md:text-5xl lg:max-w-none lg:text-6xl">
          <span>JOIN THE PRIMAL</span>
          <span className="block sm:ml-3 sm:inline">TRIBE TODAY!</span>
        </h2>
        <Button
          className="mx-auto mt-2 w-fit hover:bg-foreground hover:text-background"
          type="button"
        >
          RESERVE YOUR SPOT
        </Button>
      </section>
    </main>
  );
}
