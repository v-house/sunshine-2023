"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface NavigationBarProps {
  scrollPosition: number;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ scrollPosition }) => {
  const momentfactor = 10;
  const [width, setWidth] = useState(0);
  var maxScroll = (width - 380) / 2;
  if (maxScroll < 0) {
    maxScroll = 0;
  }
  const rate = 0.05;
  const extraMargin = Math.min(scrollPosition * momentfactor * rate, maxScroll);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    const handleScroll = () => {
      updateWidth();
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="bg-white shadow-md p-3 transition-all duration-0 rounded-2xl z-10"
      style={{ marginLeft: `${extraMargin}px` }}
    >
      <div className="flex items-center justify-evenly container mx-auto">
        <Link href="/" legacyBehavior>
          <a className="text-gray-600 hover:text-gray-800 font-semibold transition-all duration-300">
            Home
          </a>
        </Link>
        <Link href="/team" legacyBehavior>
          <a className="text-gray-600 hover:text-gray-800 font-semibold transition-all duration-300 ml-5">
            Team
          </a>
        </Link>
        <Link href="/faq" legacyBehavior>
          <a className="text-gray-600 hover:text-gray-800 font-semibold transition-all duration-300 ml-5">
            FAQ
          </a>
        </Link>
        <Link href="/events" legacyBehavior>
          <a className="text-gray-600 hover:text-gray-800 font-semibold transition-all duration-300 ml-5">
            Events
          </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="text-gray-600 hover:text-gray-800 font-semibold transition-all duration-300 ml-5">
            About Us
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
