import Tags from '@/components/ui/tags';
import { PinContainer } from "@/components/ui/3d-pin";
import Image from 'next/image';

const data = [
    {
      title: "Current",
      content: (
        <div>
          <h3 className="text-lg md:text-2xl mb-10 text-white dark:text-white max-w-4xl font-bold">
            Blunge and Robotics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start">
            <PinContainer
              title="Blunge.ai"
              href="https://www.blunge.ai/" 
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[17rem] h-[22rem]  md:w-[20rem] lg:w-[20rem] ">
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
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[17rem] h-[22rem]  md:w-[20rem] lg:w-[20rem]  ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Bipedal Wheeled Robot
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                  Currently developing a bipedal wheeled robot. The robot includes a LiDAR detector, an arm module, and a custom reinforcement learning model. We are funded by BlackBird.
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
          <Tags tags={["React","Node.js","Firebase","AWS","JavaScript","API Creation"]}/>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
          Participated in the Lab Accelerator as a software engineer for Fortus, where I contributed to building the frontend and backend of their gym app.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start">
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
      title: "2024 Sept",
      content: (
        <div>
          <h3 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
            180 Degreen Consulting - Technology Consulting Director 
          </h3>
          <Tags tags={["ML Fine tuning","Data Pipelines","Web Scraping","NLP"]}/>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-20">
          Over the course of 1.5 years, I led 5 consulting projects and supervised over 40 individual consultants. I worked on implementing machine learning and other software solutions for industrial clients who ranged from energy companies to not-for-profits. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start">
            <PinContainer
              title="Blunge Background removal project"
              href="https://github.com/amlannag/Blunge.AI-Background-Removal"
              
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[24srem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Blunge Background Removal 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    This project implements a STOA background removal pipeline for images through fine tuning segmentation models and hyper perameter fine tuning. It is also accompanied by a front end interface and tool kit.</span>
                </div>
                <div className=" w-full rounded-lg mt-4 ">
                  <Image
                    src="/blungegif.gif"
                    alt="startup template"
                    width={400}
                    height={400}
                    className="rounded-lg  h-16 md:h-32 lg:h-40 w-full "
                  />
                </div>
              </div>
            </PinContainer>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/ARK Logo.png"
                alt="startup template"
                width={400}
                height={400}
                className="h-10 md:h-12 lg:h-20 w-90 mb-5"
              />
              <Image
                src="/International_Justice_Mission_Logo_2015.png"
                alt="startup template"
                width={100}
                height={300}
                className="h-10 md:h-40 mr-0 lg:h-55 w-30 mb-5"
              />
              <Image
                src="/naturefreedom logo.png"
                alt="startup template"
                width={350}
                height={120}
                className="mt-5 h-10 md:h-20 lg:h-30 w-60"
              />
            </div>      
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
          <Tags tags={["YoloV8","MatplotLib","Pytorch","DeepSORT"]}/>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
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
          <Tags tags={["Figma","Object Clasification","NLP"]}/>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
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
          <Tags tags={["MatplotLib","Pytorch","Statistics Libraries","Financial Backtesting"]}/>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-0">
            My team and I placed in the top 1% out of 13,000 students globally in the IMC Annual Trading Challenge. In this challenge, we analyzed market data from a wide range of agents and products to curate profitable trading strategies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start">
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
          <Tags tags={["Leadership","Accounting"]}/>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
          Decided to exit MyIBTutor to direct more attention toward technology and machine learning. Over the year, my co-founder and I grew the team to over 30 tutors and taught more than 300 concurrent students. We also partnered with several schools across Queensland to deliver workshops on pedagogy and time management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start">
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
      title: "2023 Jan",
      content: (
        <div>
          <h3 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
            Co-founded MyIBTutor 
          </h3>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
          Co-founded MyIBTutor, a tutoring agency specializing in services for International Baccalaureate (IB) students. We delivered lectures at QASMT and grew the team into a small group of dedicated tutors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start">
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
  

export default data;