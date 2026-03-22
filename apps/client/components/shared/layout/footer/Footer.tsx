import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-2 p-6 bg-muted-foreground ">
      <div className="mb-10 sm:mb-25">
        <div className="sm:flex items-start sm:justify-between">
          <Image
            src="/Vector.png"
            alt="Primal Training footer logo"
            width={200}
            height={119}
            sizes="200px"
            loading="eager"
            className="h-auto w-50"
          />
          <p className="mt-8 text-5xl font-semibold sm:mt-0 ">PrimalTraining</p>
        </div>
      </div>

      <div className="flex flex-col gap-10 sm:flex-row text-lg font-bold  justify-between leading-loose">
        <div>
          Contact
          <div className="font-semibold text-sm mt-4">
            <p>
              Email:{" "}
              <a
                className="underline underline-offset-4"
                href="mailto:hello@figma.com"
              >
                hello@figma.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                className="underline underline-offset-4"
                href="tel:+977123456789"
              >
                +977 123456789
              </a>
            </p>
          </div>
        </div>
        <div>
          Opening Hours
          <div className="flex gap-8  mt-4 text-sm">
            <div>
              <p>MON-FRI</p>
              <p>SATURDAYS</p>
              <p>SUNDAYS</p>
              <p>HOLIDAYS</p>
            </div>
            <div>
              <p>5:00 – 23:00</p>
              <p>8:00 – 16:00</p>
              <p>8:00 – 13:00</p>
              <p>8:00 – 16:00</p>
            </div>
          </div>
        </div>

        <div>
          Socials
          <div className="text-sm underline flex flex-col gap-1">
            <p>Instagram</p>
            <p>X</p>
            <p>LinkedIn</p>
            <p>Spotify</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
