"use client";

import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function PlusButton({
  controlsId,
  isOpen,
  onClick,
}: {
  controlsId: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      aria-controls={controlsId}
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
  const mobileNavId = "mobile-primary-nav";

  return (
    <header className="sticky top-0 z-50 border-b-2 bg-muted-foreground ">
      <div className="flex items-center justify-between p-6">
        <Link href="/home" className="flex gap-2 hover:text-gray-700">
          <Image
            src="/Vector.png"
            alt="Primal Training logo"
            width={44}
            height={26}
          />
          <p className="font-bold text-xl">PrimalTraining</p>
        </Link>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-11">
            <li>
              <Link href="/home" className="hover:text-gray-700">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/home#about" className="hover:text-gray-700">
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/home#reserve"
                className="rounded-2xl bg-accent p-2 hover:text-gray-700"
              >
                RESERVE YOUR SPOT
              </Link>
            </li>
          </ul>
        </nav>

        <div className="sm:hidden">
          <PlusButton
            controlsId={mobileNavId}
            isOpen={showMenu}
            onClick={() => setShowMenu((current) => !current)}
          />
        </div>
      </div>

      <nav
        id={mobileNavId}
        aria-label="Mobile primary"
        className={`sm:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          showMenu ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul
          className={`bg-background transition-transform duration-300 ease-out ${
            showMenu ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <li>
            <Link
              href="/home"
              className="block border-t-2 px-18 py-5 text-sm"
              onClick={() => setShowMenu(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/home#about"
              className="block border-t-2 px-18 py-5 text-sm"
              onClick={() => setShowMenu(false)}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              href="/home#reserve"
              className="block border border-t-2 bg-accent px-18 py-5 text-sm"
              onClick={() => setShowMenu(false)}
            >
              RESERVE YOUR SPOT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
