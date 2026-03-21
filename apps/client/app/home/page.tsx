import Image from "next/image";
import Header from "../../components/shared/layout/header";
import Footer from "../../components/shared/layout/footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="border-b-2 p-4">
        <div className="flex justify-center text-8xl leading-tight font-bold">
          <p>TRAIN HARD.</p>
          <p className="text-accent">LIVE BETTER</p>
        </div>
      </div>{" "}
      <div className="flex">
        <Image
          src="/image.png"
          alt="Primal Training logo"
          width={900}
          height={400}
          className="object-fill"
        />
        <div className="flex min-w-0 flex-1 flex-col p-6 bg-muted-foreground">
          <div className="text-4xl font-bold">
            <p>FOR THE</p> <p>COMMITTED</p>
          </div>

          <div className="mt-50 w-full p-2 text-base font-normal text-foreground">
            <p className="leading-relaxed">
              Train like an athlete with top-tier equipment and expert
              programming. Whether you're building muscle or breaking PRs, we
              help you push past limits.
            </p>
          </div>
          <div className=" mt-4 text-sm text-foreground font-semibold w-fit rounded-2xl p-3 hover:bg-gray-900 hover:text-gray-100 cursor-pointer">
            {" "}
            ABOUT US{" "}
          </div>
        </div>
      </div>
      <div className="flex border-b bg-muted-foreground">
        <div className="flex min-w-0 flex-1 flex-col p-6 border-r">
          <div className="text-4xl font-bold">
            <p>GUIDED BY</p> <p>EXPERTS</p>
          </div>

          <div className="mt-50 w-full p-2 text-base font-normal text-foreground">
            <p className="leading-relaxed">
              Train like an athlete with top-tier equipment and expert
              programming. Whether you're building muscle or breaking PRs, we
              help you push past limits.
            </p>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col p-6 ">
          <div className="text-4xl font-bold">
            <p>DYNAMIC OPEN</p> <p>GYM</p>
          </div>

          <div className="mt-50 w-full p-2 text-base font-normal text-foreground">
            <p className="leading-relaxed">
              Our facility is the optimal environment for strength training and
              performance, fully equipped with top-of-the-line tools, ample
              training areas, and a focus on functional movement.
            </p>
          </div>
        </div>
        <Image
          src="/Image-2.png"
          alt="Primal Training logo"
          width={380}
          height={100}
          className="object-fill"
        />{" "}
      </div>
      <div className="border-b p-4 ">
        <div className="flex justify-start text-8xl leading-tight font-bold gap-6">
          <p>JOIN THE</p>
          <p className="text-accent">COMMUNITY</p>
        </div>
      </div>
      <div className=" flex items-stretch border-b">
        <div className="bg-muted-foreground min-w-0 w-115">
          <div className="flex flex-col px-6 border-b ">
            <div className="text-3xl font-bold py-8">
              <p>DISCOVER YOUR POTENTIAL</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col px-6 border-b py-8 ">
              <div className="font-bold text-xl">EXPERT COACHING</div>
              <p>Trainers who are passionate about your progress.</p>
            </div>
            <div className="flex flex-col px-6 border-b py-8">
              <div className="font-bold text-xl">RESULT-DRIVEN PROGRAMS</div>
              <p>Workouts that deliver tangible, measurable results.</p>
            </div>
            <div className="flex flex-col px-6 border-b py-8 ">
              <div className="font-bold text-xl">A SUPPORTIVE TRIBE</div>
              <p>A community that pushes you to be your best.</p>
            </div>
            <div className="flex flex-col px-6  py-8 ">
              <div className="text-xs text-foreground font-semibold w-fit rounded-2xl p-3 hover:bg-gray-900 hover:text-gray-100 cursor-pointer">
                VIEW CLASSES
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            src="/Image3.png"
            alt="Primal Training logo"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex  flex-col gap-6  p-40 text-center bg-accent">
        <p className="text-lg leading-tight">WHAT WE BELIEVE IN</p>
        <p className="text-6xl font-bold">JOIN PRIMAL TRIBE TODAY!</p>
        <p className="mx-auto mt-2 w-fit rounded-2xl bg-background p-3 hover:bg-foreground hover:text-background cursor-pointer">
          RESERVE YOUR SPOT
        </p>
      </div>
      <Footer />
    </div>
  );
}
