import Image from "next/image";

import Header from "../../components/shared/layout/header";
import Footer from "../../components/shared/layout/footer";
import TitleTextCard from "../../components/shared/card/title-text-card";
import TitleTextCard2 from "../../components/shared/card/title-text-card2";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="border-b-2 px-1 pt-4 pb-0">
        <div className="mb-4 flex flex-nowrap whitespace-nowrap text-3xl font-bold leading-loose sm:justify-center sm:text-8xl sm:leading-tight">
          <p>TRAIN HARD.</p>
          <p className="text-accent">LIVE BETTER</p>
        </div>
      </div>{" "}
      <div className="flex flex-col sm:flex-row">
        <Image
          src="/image.png"
          alt="Primal Training logo"
          width={900}
          height={400}
          priority
          className="h-auto w-full object-cover sm:h-128 sm:w-225 sm:object-fill"
        />
        <TitleTextCard
          titleLines={["FOR THE", "COMMITTED"]}
          description="Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits."
          className="bg-muted-foreground border-b"
        >
          <button
            type="button"
            className="w-fit cursor-pointer rounded-2xl p-3 text-sm font-semibold text-foreground hover:bg-gray-900 hover:text-gray-100"
          >
            ABOUT US
          </button>
        </TitleTextCard>
      </div>
      <div className="flex flex-col border-b bg-muted-foreground sm:flex-row">
        <TitleTextCard
          titleLines={["GUIDED BY", "EXPERTS"]}
          description="Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits."
          className="order-2 border-b sm:order-1 sm:border-b-0 sm:border-r"
        />
        <TitleTextCard
          titleLines={["DYNAMIC OPEN", "GYM"]}
          description="Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement."
          className="order-3 sm:order-2"
        />
        <Image
          src="/Image-2.png"
          alt="Primal Training logo"
          width={380}
          height={479}
          className="order-1 w-full object-cover sm:order-3 sm:mx-0 sm:w-95 sm:max-w-none sm:shrink-0 sm:object-fill"
        />{" "}
      </div>
      <div className="border-b sm:p-3 py-2 px-6">
        <div className=" flex gap-4 whitespace-nowrap text-3xl font-bold leading-loose sm:justify-center sm:text-8xl sm:leading-tight ">
          <p>JOIN THE</p>
          <p className="text-accent">COMMUNITY</p>
        </div>
      </div>
      <div className="flex flex-col border-b sm:flex-row sm:items-stretch">
        <div className="order-2 w-full bg-muted-foreground sm:order-1 sm:min-w-0 sm:w-115">
          <div className="flex flex-col px-6 border-b ">
            <div className="text-2xl sm:text-3xl font-bold py-4 sm:py-8">
              <p>DISCOVER YOUR POTENTIAL</p>
            </div>
          </div>
          <div>
            <TitleTextCard2
              title={["EXPERT COACHING"]}
              description="Trainers who are passionate about your progress."
            />
            <TitleTextCard2
              title={["RESULT-DRIVEN PROGRAMS"]}
              description="Workouts that deliver tangible, measurable results."
            />
            <TitleTextCard2
              title={["A SUPPORTIVE TRIBE"]}
              description="A community that pushes you to be your best."
            />
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
            alt="Primal Training logo"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 sm:gap-6 bg-accent px-2 py-20 text-center sm:p-40">
        <p className="text-base leading-loose font-semibold sm:text-lg">
          WHAT WE BELIEVE IN
        </p>
        <p className="text-3xl font-bold leading-none sm:max-w-none sm:text-6xl">
          <span>JOIN THE PRIMAL</span>
          <span className="block sm:ml-3 sm:inline">TRIBE TODAY!</span>
        </p>
        <button
          type="button"
          className="mx-auto mt-2 w-fit cursor-pointer rounded-2xl bg-background p-2 sm:p-3 hover:bg-foreground hover:text-background"
        >
          RESERVE YOUR SPOT
        </button>
      </div>
      <Footer />
    </div>
  );
}
