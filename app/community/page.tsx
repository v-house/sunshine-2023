import React from "react";
import ReviewCard from "./ReviewCard";

export interface Review {
  text: string;
  author: string;
  role: string;
  imageSrc: string;
}

const reviews: Review[] = [
  {
    text: "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.",
    author: "Sarah Dayan",
    role: "Staff Engineer, Algolia",
    imageSrc: "https://wallpapercave.com/wp/wp5090673.jpg",
  },
  {
    text: "Tailwind CSS is the only framework that I've seen scale on large teams. nd CSS is the only framework that I've seen scale on large teams. nd CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.",
    author: "Sarah Dayan",
    role: "Staff Engineer, Algolia",
    imageSrc: "https://wallpapercave.com/wp/wp5090673.jpg",
  },
  {
    text: "Tailwind CSS is the only framework that I've seen scale on large teams. nd CSS is the only framework that I've seen scale on large teams. nd CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.",
    author: "Sarah Dayan",
    role: "Staff Engineer, Algolia",
    imageSrc: "https://wallpapercave.com/wp/wp5090673.jpg",
  },
  {
    text: "Tailwind CSS is theto customize, adapts to any design, and the build size is tiny.",
    author: "Sarah Dayan",
    role: "Staff Engineer, Algolia",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1218796685658218496/1ZL6aLyP_400x400.jpg",
  },
  {
    text: "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.",
    author: "Sarah Dayan",
    role: "Staff Engineer, Algolia",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1218796685658218496/1ZL6aLyP_400x400.jpg",
  },
  {
    text: "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.",
    author: "Sarah Dayan",
    role: "Staff Engineer, Algolia",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1218796685658218496/1ZL6aLyP_400x400.jpg",
  },
];

const ReviewsPage: React.FC = () => {
  return (
    <div className="mx-auto p-4">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-2">Reviews</h1>
        <p className="text-lg text-gray-600 mb-8">
          Here's what we hear about sunshine:
        </p>
      </div>
      <div className="columns-1 md:columns-2 xl:columns-3">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
