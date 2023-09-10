"use client";

import Navbar from "@/components/Navbar";
import NavigationBar from "@/components/SemiNavbar";
import { useEffect, useState } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import useWindowSize from "@rooks/use-window-size";
import TeamAd from "@/components/TeamAd";
import ExperienceBar from "@/components/ExperienceBar";
import Link from "next/link";

export default function Home() {
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

  const backgroundImageUrl =
    "https://www.lse.ac.uk/cpec/assets/images/747x420/menal-health-theme.jpg";

  const scrollDown = () => {};
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <ParallaxProvider>
          <Component />
        </ParallaxProvider>
        <div className="bg-black bg-opacity-50">
          <div className="h-screen rounded-t-3xl bg-white">
            <div className="relative">
              <div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 cursor-pointer"
                onClick={scrollDown}
              >
                <span className="text-white text-xl">Scroll Down</span>
                <div className="mt-2 animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>{/* <TeamAd /> */}</div>
            <div className="h-screen">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi a
              eius facilis perspiciatis, incidunt aliquam atque fugiat odio
              cumque nam beatae commodi dolores sed quidem optio praesentium.
              Voluptatum, ipsam possimus? Beatae, officiis? Asperiores in
              dignissimos perferendis quo sapiente facere est, nostrum quisquam
              corrupti debitis vel quia dolorum natus doloribus, minus atque.
              Nisi, voluptatibus deleniti in eos quod aut est blanditiis
              molestiae odit quo repudiandae esse eveniet cum amet doloremque
              rerum.
            </div>
          </div>
        </div>
        <ExperienceBar />
        <div className="container mx-auto py-8">
          <div className="flex justify-center mt-8">
            <Link href="/buddy-programme" legacyBehavior>
              <a className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mx-2 rounded-full">
                Buddy Programme
              </a>
            </Link>
            <Link href="/mentor-programme" legacyBehavior>
              <a className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 mx-2 rounded-full">
                Mentor Programme
              </a>
            </Link>
            <Link href="/mentor-programme" legacyBehavior>
              <a className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 mx-2 rounded-full">
                Know your mentor
              </a>
            </Link>
            <Link href="/community" legacyBehavior>
              <a className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 px-4 mx-2 rounded-full">
                What we hear
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const Component = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <Parallax speed={20}>
        <div className="flex justify-center items-center 2xl:mt-0 xl:mt-0 lg:mt-16 md:mt-24 mt-64">
          <img
            src="/logo.png"
            alt="Logo"
            className="object-cover h-3/4 w-3/4"
          />
        </div>
      </Parallax>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <Parallax speed={-10}>
          <h1 className="text-6xl md:text-8xl text-white font-bold text-center">
            Sunshine
          </h1>
        </Parallax>
        <Parallax speed={-15}>
          <div className="mt-4 md:mt-8">
            <NavigationBar scrollPosition={scrollPosition} />
          </div>
        </Parallax>
      </div>
    </div>
  );
};
