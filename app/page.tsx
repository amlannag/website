"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from 'next/image';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const cs = [
  {
    id: 1,
    name: "University Of Queensland",
    designation: "Bachelors of Computer Science (Machine Learning)",
    image:
      "/uq.jpeg",
  }];
const maths = [
    {
      id: 1,
      name: "University Of Queensland",
      designation: "Bachelors of Mathematics (Statistics)",
      image:
        "/uq.jpeg",
    }];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center antialiased">
      <BackgroundBeams className="z-0" />
      
      {/* Header with higher z-index */}
      <header className="w-full fixed top-0 left-0 flex justify-end p-4 z-50">
        <nav className="flex space-x-6">
          <a 
            href="/blog" 
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors"
          >
            Blog
          </a>
          <a 
            href="/publications" 
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors"
          >
            Publications
          </a>
        </nav>
      </header>

      {/* Main Content with higher z-index */}
      <div className="max-w-4xl mx-auto p-4 mt-16 flex flex-col z-10 relative">
        <div className="max-w-4xl flex items-top relative">
          <div className="items-top">
            <Image
              src="/image.png" 
              alt="Amlan Nag"
              width={350}
              height={350}
              className="object-cover p-4 rounded-full mt-4"
            />
            <div className="flex space-x-6 mt-4 justify-left ml-5">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/amlan-nag-uq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 hover:fill-blue-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77A1.75 1.75 0 000 1.75v20.5C0 23.22.78 24 1.75 24h20.5c.97 0 1.75-.78 1.75-1.75V1.75A1.75 1.75 0 0022.23 0zM7.12 20.48H3.56V9.13h3.56zm-1.78-13c-1.14 0-2.07-.93-2.07-2.07 0-1.13.93-2.06 2.07-2.06s2.06.93 2.06 2.07-.93 2.06-2.06 2.06zm15.43 13h-3.56v-5.72c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3v5.83H9.56V9.13h3.42v1.55h.05c.47-.89 1.61-1.82 3.31-1.82 3.54 0 4.2 2.33 4.2 5.36z" />
              </svg>
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/amlannag?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.84 10.96.57.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.18.69-3.85-1.53-3.85-1.53-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.54-.29-5.22-1.27-5.22-5.65 0-1.25.45-2.27 1.17-3.07-.12-.29-.51-1.45.11-3.01 0 0 .96-.31 3.14 1.17a10.97 10.97 0 015.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.56.23 2.72.11 3.01.72.8 1.17 1.82 1.17 3.07 0 4.39-2.68 5.36-5.23 5.65.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .31.21.67.8.56C20.72 21.43 24 17.1 24 12 24 5.73 18.27.5 12 .5z" />
              </svg>
            </a>
            </div>
          </div>
          <div className="items-top">
            <h1 className="ml-10 mt-10 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mt-0">
              Amlan Nag
            </h1>
            <div className="flex flex-row items-center justify-left mb-10 ml-10 mt-5 w-full">
              <AnimatedTooltip items={cs} />
              <AnimatedTooltip items={maths}/>
            </div>
            <div className="flex flex-row items-center justify-center mb-10 ml-10 mt-5 w-full">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
