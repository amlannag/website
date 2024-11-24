"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Header from "@/components/ui/header";
import Image from 'next/image';
import BlungeAI from "@/readmefiles/BlungeAI";
import ADNI from "@/readmefiles/StyleGAn";
import DeepLearningExperimentation from "@/readmefiles/Resnet"
import JobFindingApp from "@/readmefiles/reactapp";
import PortfolioWebsite from "@/readmefiles/Portfolio";


const IMC = () => {
  return (
    <a
      href="https://github.com/maxtownson/IMC_Prosperity_2"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-fit mx-auto mt-6"
    >
      <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
        View on GitHub
      </button>
    </a>
  );
};
const data = [
  {
    category: "Machine Learning",
    title: "Training StyleGAN from scratch on ADNI",
    src: "/BrainScan.png",
    content: <ADNI />,
  },
  {
    category: "Machine Learning",
    title: "STOA Background Removal Finetuning",
    src: "/bgremoval.png",
    content: <BlungeAI />,

  },
  {
    category: "Trading",
    title: "IMC Prosperity Trading Challenge",
    src: "/trading2.png",
    content: <IMC/>,
  },
  {
    category: "Machine Learning",
    title: "ResNet and DCGAN training",
    src: "/cifar10.png",
    content: <DeepLearningExperimentation />,
  },
  {
    category: "App Developement",
    title: "React Native Job Searching App",
    src: "/react.png",
    content: <JobFindingApp />,
  },
  {
    category: "Web Developement",
    title: "Portfolio Website (This website)",
    src: "/currebtpage.png",
    content: <PortfolioWebsite />,
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
