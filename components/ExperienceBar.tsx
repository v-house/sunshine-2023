import React, { useEffect, useRef } from "react";

const ExperienceBar: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      name: "John Doe",
      position: "Web Developer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://wallpapercave.com/wp/wp5090673.jpg",
    },
    {
      name: "Jane Smith",
      position: "Designer",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://wallpapercave.com/wp/wp5090673.jpg",
    },
    {
      name: "Jane Smith",
      position: "Designer",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://wallpapercave.com/wp/wp5090673.jpg",
    },
    {
      name: "Jane Smith",
      position: "Designer",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl:
        "https://i.pinimg.com/originals/a8/6d/3e/a86d3e70e2a59cfa3b54c84ec6a2e754.jpg",
    },
    {
      name: "Jane Smith",
      position: "Designer",
      text: "Sed do eiusmod tempor incididunt ut labore et dolomod tempor incididunt ut labore et dolomod tempor incididunt ut labore et dolomod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://wallpapercave.com/wp/wp5090673.jpg",
    },
    {
      name: "Jane Smith",
      position: "Designer",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://wallpapercave.com/wp/wp5090673.jpg",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = scrollContainer.clientWidth;

      let scrollLeft = 0;

      const scroll = () => {
        if (scrollLeft < scrollWidth - containerWidth) {
          scrollLeft += 1;
        } else {
          scrollLeft = 0;
        }

        if (scrollContainer) {
          scrollContainer.scrollLeft = scrollLeft;
        }
      };

      const scrollInterval = setInterval(scroll, 30);

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <h1 className="flex py-5 px-5 font-bold text-4xl text-gray-800">
        Example
      </h1>
      <style>
        {`
          .hide-scroll-bar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scroll-bar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
        ref={scrollContainerRef}
      >
        <div className="flex flex-nowrap ml-5 space-x-6">
          {experiences.map((experience, index) => (
            <div key={index} className="w-80 md:w-96">
              <div className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="p-4">
                  <h6 className="text-xl leading-normal mb-2 text-slate-500 opacity-75">
                    {experience.position}
                  </h6>
                  <h5 className="text-2xl font-bold leading-tight mb-2 text-gray-800">
                    {experience.name}
                  </h5>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {experience.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceBar;
