import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import React from "react";

export default function TeamAd() {
  return (
    <div>
      <ParallaxProvider>
        <Component />
      </ParallaxProvider>
    </div>
  );
}

const Component = () => {
  return (
    <>
      <div className="p-8 w-auto">
        <div className="flex items-center justify-center text-slate-900 text-3xl mb-4 mt-4">
          Sunshine Team - 2023
        </div>
        <div className="h-[200px]">
          <ParallaxBanner
            layers={[
              {
                image:
                  "https://www.campusvarta.com/uploads/2023/03/01/team-iith-with-dr-krk-at-ado-copy1677636263.jpg",
                speed: -25,
              },
            ]}
            className="aspect-[2/1]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl text-red-600 font-thin">TEAM</h1>
            </div>
          </ParallaxBanner>
        </div>
      </div>
    </>
  );
};
