"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from 'next/image';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Timeline } from "@/components/ui/timeline";
import { PinContainer } from "@/components/ui/3d-pin";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

const scrollToContact = () => {
  const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
      });
    }
};

export const Spacer = ({ height = "100px" }: { height?: string }) => {
  return <div style={{ height }} />;
};

const handleContactClick = () => {
  const contactSection = document.getElementById('contact-section');
  if (!contactSection) return;

  const startPosition = window.pageYOffset;
  const targetPosition = contactSection.offsetTop;
  const distance = targetPosition - startPosition;
  const duration = 2000; // Duration in milliseconds (2 seconds - adjust this to change speed)
  let start: number | null = null;

  function animation(currentTime: number) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);

    // Easing function for smoother animation
    const ease = (t: number) => t * t * t; // Cubic easing

    window.scrollTo(0, startPosition + distance * ease(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
};

const data = [
  {
    title: "Current",
    content: (
      <div>
        <h3 className="text-lg md:text-2xl mb-10 text-white dark:text-white max-w-4xl font-bold">
          Blunge and Robotics
        </h3>
        <div className="grid grid-cols-2 justify-start">
          <PinContainer
            title="Blunge.ai"
            href="https://www.blunge.ai/"
            
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[22rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Machine Learning Engineer 
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                Working as a Machine Learning Engineer and researcher at Blunge, where I am developing image-to-video generation capabilities for their fine-tuned Stable Diffusion models.
                </span>
              </div>
              <div className=" w-full rounded-lg mt-4 ">
                <Image
                  src="/guidence 9  steps 50.gif"
                  alt="startup template"
                  width={400}
                  height={400}
                  className="rounded-lg  h-16 md:h-32 lg:h-40 w-full "
                />
              </div>
            </div>
          </PinContainer>
          <PinContainer
            title="Blank Robotics"
            href="https://x.com/blankrobotics"
            
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[22rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Bipedal Wheeled Robot
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                Currently developing a bipedal wheeled robot. The robot includes a LiDAR detector, an arm module, and a custom reinforcement learning model. Follow our journey!
                </span>
              </div>
              <div className=" w-full rounded-lg mt-4 ">
                <Image
                  src="/robot.png"
                  alt="startup template"
                  width={600}
                  height={400}
                  className="rounded-lg  h-16 md:h-32 lg:h-40 w-full "
                />
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    ),
  },
  {
    title: "2024 Aug",
    content: (
      <div>
        <h3 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          Fortus - Software Engineer
        </h3>
        <p className="text-neutral-500 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
        Participated in the Lab Accelerator as a software engineer for Fortus, where I contributed to building the frontend and backend of their gym app.
        </p>
        <div className="grid grid-cols-2 mt-0">
          <PinContainer
            title="Fortus App"
            href="https://www.fortus.fit/"
          >
            <div className="flex  flex-col p-3 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[15rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
               Fortus App
              </h3>
              <div className=" w-full rounded-lg mt-4 ">
                <Image
                  src="/Fortus.png"
                  alt="startup template"
                  width={400}
                  height={400}
                  className="rounded-lg  h-16 md:h-32 lg:h-40 w-full "
                />
              </div>
            </div>
          </PinContainer>
          <Image
              src="/IMG_8240.jpg"
              alt="startup template"
              width={400}
              height={400}
              className="rounded-lg object-cover h-20 md:h-44 mt-11 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
        </div>
      </div>
      
    ),
  },
  {
    title: "2024 June",
    content: (
      <div>
        <h3 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          UQ Winter Research
        </h3>
        <p className="text-neutral-500 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
          Participated in the UQ Winter Research Program under Dr. Miao Xu. Fine-tuned YOLOv8 for object detection and added additional blocks for object tracking. The goal of this project was to quantify the game state for League of Legends and develop a reinforcement learning model to play the game.
        </p>
      </div>
    ),
  },
  {
    title: " 2024 May",
    content: (
      <div>
        <h3 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          UQ Validate Accelerator 
        </h3>
        <p className="text-neutral-500 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
        Was one of 10 winners who received funding in UQ’s startup program. I pitched and prototyped a SaaS job interview tool that integrated ChatGPT APIs and image detection models.
        </p>
      </div>
    ),
  },
  {
    title: "2024 Apr",
    content: (
      <div>
        <h3 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          Placed Top 1% in IMC Prosperity Globally
        </h3>
        <p className="text-neutral-500 dark:text-neutral-200 text-xs md:text-xl font-normal mb-0">
          My team and I placed in the top 1% out of 13,000 students globally in the IMC Annual Trading Challenge. In this challenge, we analyzed market data from a wide range of agents and products to curate profitable trading strategies.
        </p>
        <div className="grid grid-cols-2 mt-0">
          <PinContainer
            title="GitHub Repository"
            href="https://github.com/maxtownson/IMC_Prosperity_2"
          >
            <div className="flex  flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[15rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
               IMC Git Hub Repository 
              </h3>
              <div className=" w-full rounded-lg mt-4 ">
                <Image
                  src="/imc-vector-logo.png"
                  alt="startup template"
                  width={400}
                  height={400}
                  className="rounded-lg  h-16 md:h-32 lg:h-40 w-full "
                />
              </div>
            </div>
          </PinContainer>
          <Image
              src="/tdfinal.png"
              alt="startup template"
              width={400}
              height={400}
              className="rounded-lg object-cover h-20 md:h-44 mt-11 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
        </div>
      </div>
      
    ),
  },
  {
    title: "2023 Dec",
    content: (
      <div>
        <h3 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          Exit MyIBTutor
        </h3>
        <p className="text-neutral-500 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
        Decided to exit MyIBTutor to direct more attention toward technology and machine learning. Over the year, my co-founder and I grew the team to over 30 tutors and taught more than 300 concurrent students. We also partnered with several schools across Queensland to deliver workshops on pedagogy and time management.
        </p>
        <div className="grid grid-cols-2 gap-4">
            <Image
              src="/1710899712049.jpeg"
              alt="startup template"
              width={400}
              height={400}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/1710899761892.jpeg"
              alt="startup template"
              width={400}
              height={400}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
      </div>
    ),
  },
  {
    title: "2023 Sept",
    content: (
      <div>
        <h3 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          Lead IJM Project as Team Leader
        </h3>
        <p className="text-neutral-500 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
        Led a team of 10 consultants to deliver workflow and process mapping solutions for the International Justice Mission. Implemented software solutions to assist with process mapping.

        </p>
      </div>
    ),
  },
  {
    title: "2023 Jan",
    content: (
      <div>
        <h3 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          Co-founded MyIBTutor 
        </h3>
        <p className="text-neutral-500 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
        Co-founded MyIBTutor, a tutoring agency specializing in services for International Baccalaureate (IB) students. We delivered lectures at QASMT and grew the team into a small group of dedicated tutors.
        </p>
        <div className="grid grid-cols-2 gap-4">
            <Image
              src="/46070_MyIBTutor_logo_BJ-01.png"
              alt="startup template"
              width={400}
              height={400}
              className="rounded-lg object-contain h-16 md:h-32 lg:h-40 w-full "
            />
            <Image
              src="/first lecture 1.png"
              alt="startup template"
              width={400}
              height={400}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
      </div>
    ),
  }
  
];


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
  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center antialiased">
      <BackgroundBeams className="z-0" />

      {/* Header with higher z-index */}
      <header className="w-full fixed top-0 left-0 flex justify-end p-4 z-50">
        <nav className="flex space-x-6">
          <Link
            href="/"
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors"
          >
            Contact
          </Link>
        </nav>
      </header>


      {/* Main Content with higher z-index */}
      <div className="max-w-4xl mx-auto p-4 mt-16 flex flex-col z-10 relative">
        <div className="max-w-4xl flex items-start relative">
          <Image
            src="/pfp.jpg"
            alt="Amlan Nag"
            width={350}
            height={350}
            className="object-cover rounded-full mt-4 border-2 border-white"
          />
          <div>
            <h1 className="ml-10 mt-10 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
              Amlan Nag
            </h1>
            <div className="flex items-center mb-5 ml-10 mt-3 w-full">
              <div className="flex space-x-6 mr-5">
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
              <AnimatedTooltip items={cs} />
              <AnimatedTooltip items={maths} />
            </div>
              <p className="ml-11 text-lg text-gray-500 font-sans font-medium max-w-xl mb-10">
                Hi! I am Amlan Nag, a Machine Learning and Statistics student who
                is passionate about robotics, quantitative finance, and research.
                I am always looking to build new, cool things. Please reach out if
                you would like to collaborate!
              </p> 
              <div>
              <Button
                borderRadius="1.75rem"
                className="bg-grey dark:bg-slate-900 text-white font-bold border-neutral-800 dark:border-slate-900"
                onClick={scrollToContact}
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
  );
}


