// components/ReviewCard.tsx
import React from "react";

export interface Review {
  text: string;
  author: string;
  role: string;
  imageSrc: string;
}

const ReviewCard: React.FC<Review> = ({ text, author, role, imageSrc }) => {
  return (
    <figure
      className="bg-slate-100 rounded-xl m-2 mx-1 p-4 dark:bg-slate-800"
      style={{ breakInside: "avoid" }}
    >
      <img
        className="h-36 w-36 object-cover rounded-full mx-auto"
        src={imageSrc}
        alt={author}
      />
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-medium">{text}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{author}</div>
          <div className="text-slate-700 dark:text-slate-500">{role}</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default ReviewCard;
