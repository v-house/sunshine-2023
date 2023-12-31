"use client";

import React, { useEffect, useRef, useState } from "react";
import EachTeam from "./Eachteam";

const Page: React.FC = () => {
  const teams = [
    {
      id: "content-team",
      teamName: "Content Team",
      teamPhotoUrl:
        "https://e1.pxfuel.com/desktop-wallpaper/923/120/desktop-wallpaper-momoland-kpop-south-korean-group-nancy-momoland.jpg",
      teamDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui expedita perferendis unde debitis sunt reprehenderit vero asperiores tempore, officia excepturi fugit aliquam minus voluptas. At aut, voluptatum magnam, praesentium voluptatibus in explicabo vero illum nesciunt nostrum molestias saepe? Commodi, nihil. Magni ipsam, eaque impedit fuga nobis enim rem sapiente accusantium?",
      teamMembers: [
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
            "When you add your text to QuillBots Word Counter, our powerful platform instantly performs the mundane counting tasks for you, so you can see right where your word and character limits are sitting for your project. So, if you don’t know what the rules are for what counts as a character or when compound words count as one or two words, save yourself the searching, and let QuillBot be the word and character calculator.When you add your text to QuillBots Word Counter, our powerful platform instantly performs the mundane counting tasks for you, so you can sdfsd sdfsa f sdfs",
        },
        {
          name: "Nancy Jewel Mcdonie",
          photoUrl:
            "https://i.pinimg.com/736x/6f/9e/de/6f9ede12061e22b0cf4eb2c71cc9e662.jpg",
          email: "nancymomoland.com",
          phone: "00000000000",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiipsum dolor sit amet, consectetur adipiipsum dolor sit amet, consectetur adipiipsum dolor sit amet, consectetur adipiscing elit. lorem2 fdfklsdf dsfladjf sadf;jsladf sdfsjfldfsadk dsf dskfdsjfl ",
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
            "When you add your text to QuillBots Word Counter, our powerful platform instantly performs the mundane counting tasks for you, so you can see right where your word and character limits are sitting for your project.        So, if you don’t know what the rules are for what counts as a character or when compound words count as one or two words, save yourself the searching, and let QuillBot be the word and character calculator.",
        },
      ],
    },
    {
      id: "delivery-team",
      teamName: "Delivery Team",
      teamPhotoUrl:
        "https://e1.pxfuel.com/desktop-wallpaper/923/120/desktop-wallpaper-momoland-kpop-south-korean-group-nancy-momoland.jpg",
      teamDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui expedita perferendis unde debitis sunt reprehenderit vero asperiores tempore, officia excepturi fugit aliquam minus voluptas. At aut, voluptatum magnam, praesentium voluptatibus in explicabo vero illum nesciunt nostrum molestias saepe? Commodi, nihil. Magni ipsam, eaque impedit fuga nobis enim rem sapiente accusantium?",
      teamMembers: [
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
            "When you add your text to QuillBots Word Counter, our powerful platform instantly performs the mundane counting tasks for you, so you can see right where your word and character limits are sitting for your project. So, if you don’t know what the rules are for what counts as a character or when compound words count as one or two words, save yourself the searching, and let QuillBot be the word and character calculator.When you add your text to QuillBots Word Counter, our powerful platform instantly performs the mundane counting tasks for you, so you can sdfsd sdfsa f sdfs",
        },
        {
          name: "Nancy Jewel Mcdonie",
          photoUrl:
            "https://i.pinimg.com/736x/6f/9e/de/6f9ede12061e22b0cf4eb2c71cc9e662.jpg",
          email: "nancymomoland.com",
          phone: "00000000000",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiipsum dolor sit amet, consectetur adipiipsum dolor sit amet, consectetur adipiipsum dolor sit amet, consectetur adipiscing elit. lorem2 fdfklsdf dsfladjf sadf;jsladf sdfsjfldfsadk dsf dskfdsjfl ",
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
            "When you add your text to QuillBots Word Counter, our powerful platform instantly performs the mundane counting tasks for you, so you can see right where your word and character limits are sitting for your project.        So, if you don’t know what the rules are for what counts as a character or when compound words count as one or two words, save yourself the searching, and let QuillBot be the word and character calculator.",
        },
      ],
    },
    {
      id: "marketing-team",
      teamName: "Contentt Team",
      teamPhotoUrl:
        "https://e1.pxfuel.com/desktop-wallpaper/923/120/desktop-wallpaper-momoland-kpop-south-korean-group-nancy-momoland.jpg",
      teamDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui expedita perferendis unde debitis sunt reprehenderit vero asperiores tempore, officia excepturi fugit aliquam minus voluptas. At aut, voluptatum magnam, praesentium voluptatibus in explicabo vero illum nesciunt nostrum molestias saepe? Commodi, nihil. Magni ipsam, eaque impedit fuga nobis enim rem sapiente accusantium?",
      teamMembers: [
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
            "When you add your text to QuillBots Word Counter, our powerful platform instantly performs the mundane counting tasks for you, so you can see right where your word and character limits are sitting for your project. So, if you don’t know what the rules are for what counts as a character or when compound words count as one or two words, save yourself the searching, and let QuillBot be the word and character calculator.When you add your text to QuillBots Word Counter, our powerful platform instantly performs the mundane counting tasks for you, so you can sdfsd sdfsa f sdfs",
        },
        {
          name: "Nancy Jewel Mcdonie",
          photoUrl:
            "https://i.pinimg.com/736x/6f/9e/de/6f9ede12061e22b0cf4eb2c71cc9e662.jpg",
          email: "nancymomoland.com",
          phone: "00000000000",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiipsum dolor sit amet, consectetur adipiipsum dolor sit amet, consectetur adipiipsum dolor sit amet, consectetur adipiscing elit. lorem2 fdfklsdf dsfladjf sadf;jsladf sdfsjfldfsadk dsf dskfdsjfl ",
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
            "When you add your text to QuillBots Word Counter, our powerful platform instantly performs the mundane counting tasks for you, so you can see right where your word and character limits are sitting for your project.        So, if you don’t know what the rules are for what counts as a character or when compound words count as one or two words, save yourself the searching, and let QuillBot be the word and character calculator.",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleButtonClick = (teamId: string) => {
      const element = document.getElementById(teamId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    teams.forEach((team) => {
      const buttonId = `button-${team.id}`;
      const teamId = team.id;

      const button = document.getElementById(buttonId);
      if (button) {
        button.addEventListener("click", () => {
          handleButtonClick(teamId);
        });
      }
    });

    // Clean up event listeners when the component unmounts
    return () => {
      teams.forEach((team) => {
        const buttonId = `button-${team.id}`;
        const button = document.getElementById(buttonId);
        if (button) {
          button.removeEventListener("click", () => {
            handleButtonClick(team.id);
          });
        }
      });
    };
  }, []);

  return (
    <div className="mx-auto mt-8">
      <div className="flex flex-wrap space-x-4 justify-evenly">
        {teams.map((team) => (
          <div key={team.id} className="m-4">
            <a
              id={`button-${team.id}`}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 active:scale-95"
            >
              {team.teamName}
            </a>
          </div>
        ))}
      </div>
      {teams.map((team, index) => (
        <div key={team.id} id={team.id}>
          <EachTeam key={index} {...team} />
        </div>
      ))}
    </div>
  );
};

export default Page;
