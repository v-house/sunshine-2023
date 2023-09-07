"use client";
import React from "react";
import TeamMember from "@/components/TeamCard";

const Newsletter: React.FC = () => {
  const teamMembers = [
    {
      name: "Nancy Jewel Mcdonie",
      photoUrl: "https://wallpapercave.com/wp/wp5090673.jpg",
      email: "nancymomoland.com",
      phone: "00000000000",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem2 fdfklsdf dsfladjf sadf;jsladf sdfsjfldfsadk dsf dskfdsjfl ",
    },
    {
      name: "Nancy Jewel Mcdonie",
      photoUrl:
        "https://i.pinimg.com/originals/a8/6d/3e/a86d3e70e2a59cfa3b54c84ec6a2e754.jpg",
      email: "nancymomoland.com",
      phone: "00000000000",
      about: "Lorem f sdfsjfldfsadk dsf dskfdsjfl ",
    },
    {
      name: "Nancy Jewel Mcdonie",
      photoUrl:
        "https://e0.pxfuel.com/wallpapers/133/378/desktop-wallpaper-nancy-momoland-korean-dancer-thumbnail.jpg",
      email: "nancymomoland.com",
      phone: "00000000000",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem2 fdfklsdf dsfladjf sadf;jsladf sdfsjfldfsadk dsf dskfdsjfl ",
    },
    {
      name: "Nancy Jewel Mcdonie",
      photoUrl:
        "https://i.pinimg.com/736x/6f/9e/de/6f9ede12061e22b0cf4eb2c71cc9e662.jpg",
      email: "nancymomoland.com",
      phone: "00000000000",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem2 fdfklsdf dsfladjf sadf;jsladf sdfsjfldfsadk dsf dskfdsjfl ",
    },
    {
      name: "Nancy Jewel Mcdonie",
      photoUrl: "https://wallpapercave.com/wp/wp2532903.jpg",
      email: "nancymomoland.com",
      phone: "00000000000",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem2 fdfklsdf dsfladjf sadf;jsladf sdfsjfldfsadk dsf dskfdsjfl ",
    },
    {
      name: "Nancy Jewel Mcdonie",
      photoUrl:
        "https://pbs.twimg.com/profile_images/1218796685658218496/1ZL6aLyP_400x400.jpg",
      email: "nancymomoland.com",
      phone: "00000000000",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem2 fdfklsdf dsfladjf sadf;jsladf sdfsjfldfsadk dsf dskfdsjfl ",
    },
  ];

  return (
    <>
      <section id="ContentTeam" className="py-8">
        <div className="mb-8 flex items-center">
          <hr className="border-t-2 border-white flex-grow" />
          <h2 className="text-3xl font-semibold text-blue-600 mx-4">
            Content Team
          </h2>
          <hr className="border-t-2 border-white flex-grow" />
        </div>

        <div className="p-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui expedita
          perferendis unde debitis sunt reprehenderit vero asperiores tempore,
          officia excepturi fugit aliquam minus voluptas. At aut, voluptatum
          magnam, praesentium voluptatibus in explicabo vero illum nesciunt
          nostrum molestias saepe? Commodi, nihil. Magni ipsam, eaque impedit
          fuga nobis enim rem sapiente accusantium?
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Newsletter;
