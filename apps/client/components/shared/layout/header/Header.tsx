"use client";

import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { useState } from "react";

function PlusButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
      className="inline-flex items-center justify-center"
      onClick={onClick}
      type="button"
    >
      <span
        className={`transition-transform duration-300 ease-out ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        <HugeiconsIcon icon={isOpen ? MinusSignIcon : PlusSignIcon} size={30} />
      </span>
    </button>
  );
}

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 bg-muted-foreground ">
      <div className="flex items-center justify-between p-6">
        <div className="flex cursor-pointer gap-2 hover:text-gray-700">
          <Image
            src="/Vector.png"
            alt="Primal Training logo"
            width={44}
            height={26}
          />
          <p className="font-bold text-dark-500 text-xl">PrimalTraining</p>
        </div>

        <div className="hidden cursor-pointer items-center gap-11 sm:flex">
          <p className="hover:text-gray-700">HOME</p>
          <p className="hover:text-gray-700">ABOUT</p>
          <p className=" bg-accent p-2 rounded-2xl hover:text-gray-700">
            RESERVE YOUR SPOT
          </p>
        </div>

        <div className="sm:hidden">
          <PlusButton
            isOpen={showMenu}
            onClick={() => setShowMenu((current) => !current)}
          />
        </div>
      </div>

      <div
        className={`sm:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          showMenu ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`bg-background transition-transform duration-300 ease-out ${
            showMenu ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <p className="border-t-2 py-5 px-18 text-2xl">HOME</p>
          <p className="border-t-2 py-5 px-18 text-2xl">ABOUT US</p>
          <p className="border-t-2 border bg-accent py-5 px-18 text-2xl">
            RESERVE YOUR SPOT
          </p>
        </div>
      </div>
    </header>
  );
}
