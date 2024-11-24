"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Header from "@/components/ui/header";
import Image from 'next/image';

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/Fortus.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Machine Learning",
    title: "Training StyleGAN from scratch on ADNI",
    src: "/Fortus.png",
    content: <DummyContent />,
  },
  {
    category: "Machine Learning",
    title: "STOA Background Removal Finetuning",
    src: "/Fortus.png",
    content: <DummyContent />,

  },
  {
    category: "Trading",
    title: "IMC Prosperity Trading Challenge",
    src: "/Fortus.png",
    content: <DummyContent />,
  },
  {
    category: "Machine Learning",
    title: "ResNet and DCGAN training",
    src: "/Fortus.png",
    content: <DummyContent />,
  },
  {
    category: "App Developement",
    title: "React Native Job Searching App",
    src: "/Fortus.png",
    content: <DummyContent />,
  },
  {
    category: "Web Developement",
    title: "Portfolio Website (This website)",
    src: "/Fortus.png",
    content: <DummyContent />,
  },
];


export default function ProjectsPage() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <main className="min-h-screen bg-neutral-900">
      <Header />
      <div className="w-full h-full py-20">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto 
            mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b 
            from-neutral-100 via-neutral-400 to-neutral-700 white:from-neutral-300 white:via-dark white:to-dark">
                Projects
        </h1>
        <Carousel items={cards} />
      </div>
    </main>
  );
}
