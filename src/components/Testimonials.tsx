"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const AppTestimonials = [
  {
    quote:
      "This banking app has made managing my finances so much easier! I love how user-friendly it is.",
    name: "Mr.PrajjwalKumar Panzade",
    title: "Freelance Graphic Designer",
  },
  {
    quote:
      "With this app, I can quickly transfer money between accounts and pay bills on the go. It's a game-changer!",
    name: "Mr.Harshvardhan Patil",
    title: "Small Business Owner",
  },
  {
    quote:
      "I've been using this banking app for years, and it has never let me down. It's secure and reliable.",
    name: "Miss Sakshi Pharande",
    title: "Software Engineer",
  },
  {
    quote:
      "Managing my investments has never been easier. Thanks to this app, I can track my portfolio anytime, anywhere.",
    name: "Mr.Omkesh Sajjanwar",
    title: "Financial Analyst",
  },
  {
    quote:
      "This banking app has a sleek design and intuitive interface. It's perfect for users of all ages.",
    name: "Mr.Gomatesh Bedage",
    title: "Hon. Teacher",
  },
];

const Testimonials = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: The Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={AppTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
