import Image from "next/image";

import Button from "../../components/ui/button";
import TitleTextCard from "../../components/shared/card/title-text-card";
import TitleTextCard2 from "../../components/shared/card/title-text-card2";
import {
  contentButtonClassName,
  homeFeatureCards,
  homeHeroCards,
  homePotentialCards,
} from "../../lib/data/home";

export default function HomePage() {
  return (
    <main>
      <div className="border-b-2 px-1 pt-4 pb-0">
        <div className="mb-4 flex  text-3xl font-bold leading-loose sm:flex-nowrap sm:justify-center sm:text-8xl sm:leading-tight sm:whitespace-nowrap md:text-6xl lg:text-8xl">
          <h1 className="whitespace-nowrap">TRAIN HARD.</h1>
          <h1 className="whitespace-nowrap text-accent">LIVE BETTER</h1>
        </div>
      </div>
      <section id="about" className="flex flex-col sm:flex-row">
        <Image
          src="/image.png"
          alt="Athletes performing box squats in a sunlit gym"
          width={900}
          height={400}
          className="h-auto w-full object-cover sm:h-128 sm:w-225 md:h-auto md:w-140 lg:h-128 lg:w-225"
        />

        {homeHeroCards.map((card) => (
          <TitleTextCard
            key={card.key}
            titleLines={card.titleLines}
            description={card.description}
            className={card.className}
          >
            {card.actionLabel ? (
              <button type="button" className={contentButtonClassName}>
                {card.actionLabel}
              </button>
            ) : null}
          </TitleTextCard>
        ))}
      </section>
      <section className="flex flex-col border-b bg-muted-foreground sm:flex-row">
        {homeFeatureCards.map((card) => (
          <TitleTextCard
            key={card.key}
            titleLines={card.titleLines}
            description={card.description}
            className={card.className}
          />
        ))}
        <Image
          src="/Image-2.png"
          alt="Athlete resting battle ropes across her shoulders in the gym"
          width={380}
          height={479}
          className="order-1 w-full object-cover sm:order-3 sm:mx-0 sm:w-95 sm:max-w-none sm:shrink-0 md:w-72 lg:w-95"
        />
      </section>
      <div className="border-b sm:p-3 py-2 px-6">
        <div className="flex gap-3 text-3xl font-bold leading-loose sm:flex-nowrap sm:justify-center sm:text-8xl sm:leading-tight sm:whitespace-nowrap md:text-6xl lg:text-8xl">
          <h1 className="whitespace-nowrap">JOIN THE</h1>
          <h1 className="whitespace-nowrap text-accent">COMMUNITY</h1>
        </div>
      </div>
      <section className="flex flex-col border-b sm:flex-row sm:items-stretch">
        <div className="order-2 w-full bg-muted-foreground sm:order-1 sm:min-w-0 sm:w-115 md:w-90 lg:w-115">
          <div className="flex flex-col px-6 border-b ">
            <div className="py-4 text-2xl font-bold sm:py-8 sm:text-3xl md:text-2xl lg:text-3xl">
              <p>DISCOVER YOUR POTENTIAL</p>
            </div>
          </div>
          <div>
            {homePotentialCards.map((card) => (
              <TitleTextCard2
                key={card.key}
                title={card.title}
                description={card.description}
              />
            ))}
            <div className="flex flex-col px-6 py-8  items-center sm:items-start">
              <button
                type="button"
                className="w-fit cursor-pointer rounded-2xl p-3 text-xs font-semibold text-foreground hover:bg-gray-900 hover:text-gray-100
               "
              >
                VIEW CLASSES
              </button>
            </div>
          </div>
        </div>
        <div className="relative order-1 min-h-80 w-full sm:order-2 sm:min-h-0 sm:flex-1">
          <Image
            src="/Image3.png"
            alt="Group fitness class performing barbell squats"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section
        id="reserve"
        className="flex flex-col items-center gap-2 bg-accent px-2 py-20 text-center sm:gap-6 sm:p-40 md:px-12 md:py-24 lg:p-40"
      >
        <h1 className="text-base leading-loose font-semibold sm:text-lg">
          WHAT WE BELIEVE IN
        </h1>
        <h1 className="text-3xl font-bold leading-none sm:max-w-none sm:text-6xl md:max-w-3xl md:text-5xl lg:max-w-none lg:text-6xl">
          <span>JOIN THE PRIMAL</span>
          <span className="block sm:ml-3 sm:inline">TRIBE TODAY!</span>
        </h1>
        <Button
          className="mx-auto mt-2 w-fit hover:bg-foreground hover:text-background"
          type="button"
          variant="secondary"
        >
          RESERVE YOUR SPOT
        </Button>
      </section>
    </main>
  );
}
