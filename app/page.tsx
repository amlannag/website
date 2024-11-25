"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "@/components/ui/moving-border";
import Header from "@/components/ui/header";
import { useRouter } from "next/navigation";
import data from "./experience";

const Spacer = ({ height = "100px" }: { height?: string }) => {
  return <div style={{ height }} className="bg-neutral-900 w-full" />;
};

const cs = [
  {
    id: 1,
    name: "University Of Queensland",
    designation: "Bachelors of Computer Science (Machine Learning)",
    image: "/uq.jpeg",
  },
];

const maths = [
  {
    id: 1,
    name: "University Of Queensland",
    designation: "Bachelors of Mathematics (Statistics)",
    image: "/uq.jpeg",
  },
];

export default function Home() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <main className="min-h-screen w-screen overflow-x-hidden bg-neutral-900">
      <div className="relative flex flex-col items-center w-full">
      <BackgroundBeams className="z-0" />
      <Header />
        <div className="w-full max-w-4xl mx-auto px-4 mt-10 md:mt-16 flex flex-col z-10 relative">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 relative">
          {/* Profile Image */}
          <Image
            src="/pfp.jpg"
            alt="Amlan Nag"
            width={150}
            height={150}
            className="object-cover rounded-full border-2 border-white md:w-[200px] md:h-[200px]"
          />

          {/* Profile Details */}
            <div className="text-center md:text-left w-full">
            <h1 className="text-4xl md:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
              Amlan Nag
            </h1>
            <div className="flex justify-center md:justify-start items-center space-x-6 mt-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/amlan-nag-uq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-800"
                aria-label="LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77A1.75 1.75 0 000 1.75v20.5C0 23.22.78 24 1.75 24h20.5c.97 0 1.75-.78 1.75-1.75V1.75A1.75 1.75 0 0022.23 0zM7.12 20.48H3.56V9.13h3.56zm-1.78-13c-1.14 0-2.07-.93-2.07-2.07 0-1.13.93-2.06 2.07-2.06s2.06.93 2.06 2.07-.93 2.06-2.06 2.06zm15.43 13h-3.56v-5.72c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3v5.83H9.56V9.13h3.42v1.55h.05c.47-.89 1.61-1.82 3.31-1.82 3.54 0 4.2 2.33 4.2 5.36z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/amlannag?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-600"
                aria-label="GitHub Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.84 10.96.57.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.18.69-3.85-1.53-3.85-1.53-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.54-.29-5.22-1.27-5.22-5.65 0-1.25.45-2.27 1.17-3.07-.12-.29-.51-1.45.11-3.01 0 0 .96-.31 3.14 1.17a10.97 10.97 0 015.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.56.23 2.72.11 3.01.72.8 1.17 1.82 1.17 3.07 0 4.39-2.68 5.36-5.23 5.65.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .31.21.67.8.56C20.72 21.43 24 17.1 24 12 24 5.73 18.27.5 12 .5z" />
                </svg>
              </a>
            </div>
            <p className="text-lg text-gray-300 font-sans font-medium max-w-xl mt-4 md:mt-6">
              Hi! I am Amlan Nag, a Machine Learning and Statistics student
              passionate about robotics, quantitative finance, and research.
              I love building new, exciting things—let&apos;s collaborate!
            </p>
            <div className="mt-4 flex justify-center md:justify-start">
              <Button
                borderRadius="1.75rem"
                className="bg-grey text-white font-bold px-6 py-3"
                onClick={handleContactClick}
              >
                Contact Me!
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Timeline data={data} />
      </div>
      <Spacer height="200px" />
    </div>
    </main>
  );
}