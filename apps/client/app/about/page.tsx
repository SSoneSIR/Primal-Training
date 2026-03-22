import Image from "next/image";
import TitleTextCard from "../../components/shared/card/title-text-card";

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
          <TitleTextCard
            titleLines={["TAP INTO YOUR PRIMAL POWER.", "FORGE A STRONGER YOU"]}
            description="Primal Training is committed to delivering a training experience rooted in raw strength, functional fitness, and unwavering community support. We empower our members to tap into their primal power, achieve their goals, and live a life of strength, resilience, and unwavering determination."
            className="bg-accent order-1 sm:order-0"
            descriptionTop={
              <p className="w-fit text-sm font-bold text-foreground sm:mt-0 mt-10">
                OUR VISION
              </p>
            }
          />
          <Image
            src="/Image4.jpg"
            alt="Two athletes fist-bumping beside a loaded barbell"
            width={380}
            height={479}
            className="w-full order-0 sm:order-1  object-contain sm:object-cover sm:mx-0 sm:w-95 sm:max-w-none sm:shrink-0 md:w-72 lg:w-95"
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
        <TitleTextCard
          titleLines={["DYNAMIC OPEN", "GYM"]}
          description="Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement."
          className="bg-accent-foreground border-r"
        />
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
        <button
          type="button"
          className="mx-auto mt-2 w-fit cursor-pointer rounded-2xl bg-accent p-2 sm:p-3 hover:bg-foreground hover:text-background"
        >
          RESERVE YOUR SPOT
        </button>
      </section>
    </main>
  );
}
