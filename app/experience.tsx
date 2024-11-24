import Tags from '@/components/ui/tags';
import { PinContainer } from "@/components/ui/3d-pin";
import Image from 'next/image';

const data = [
    {
        title: "Current",
        content: (
          <div>
            <h3 className="text-lg md:text-2xl mb-6 text-white font-bold">
              Blunge and Robotics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PinContainer title="Blunge.ai" href="https://www.blunge.ai/">
                <div className="flex flex-col p-4 text-slate-100/50 w-full md:w-[20rem]">
                  <h3 className="font-bold text-base text-slate-100">
                    Machine Learning Engineer
                  </h3>
                  <p className="text-base text-slate-500">
                    Working as a Machine Learning Engineer and researcher at Blunge, developing image-to-video generation capabilities for fine-tuned Stable Diffusion models.
                  </p>
                  <div className="rounded-lg mt-4">
                    <Image
                      src="/guidence 9 steps 50.gif"
                      alt="Blunge Demo"
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </PinContainer>
              <PinContainer title="Blank Robotics" href="https://x.com/blankrobotics">
                <div className="flex flex-col p-4 text-slate-100/50 w-full md:w-[20rem]">
                  <h3 className="font-bold text-base text-slate-100">
                    Bipedal Wheeled Robot
                  </h3>
                  <p className="text-base text-slate-500">
                    Developing a bipedal wheeled robot with LiDAR, an arm module, and custom reinforcement learning. Funded by BlackBird.
                  </p>
                  <div className="rounded-lg mt-4">
                    <Image
                      src="/robot.png"
                      alt="Robot Demo"
                      width={600}
                      height={300}
                      className="rounded-lg w-full h-auto"
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
            <h3 className="text-lg md:text-2xl mb-4 text-white font-bold">
              Fortus - Software Engineer
            </h3>
            <Tags tags={["React", "Node.js", "Firebase", "AWS", "JavaScript"]} />
            <p className="text-neutral-400 text-sm md:text-base mb-6">
              Contributed to building the frontend and backend of the Fortus gym app as part of the Lab Accelerator.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PinContainer title="Fortus App" href="https://www.fortus.fit/">
                <div className="flex flex-col p-4 text-slate-100/50 w-full md:w-[20rem]">
                  <h3 className="font-bold text-base text-slate-100">Fortus App</h3>
                  <div className="rounded-lg mt-4">
                    <Image
                      src="/Fortus.png"
                      alt="Fortus Demo"
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </PinContainer>
              <Image
                src="/IMG_8240.jpg"
                alt="Fortus Team"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2024 Sept",
        content: (
          <div>
            <h3 className="text-lg md:text-2xl mb-4 text-white font-bold">
              180 Degrees Consulting - Technology Consulting Director
            </h3>
            <Tags tags={["ML Fine-tuning", "Data Pipelines", "Web Scraping", "NLP"]} />
            <p className="text-neutral-400 text-sm md:text-base mb-6">
              Led 5 consulting projects and supervised 40+ consultants, delivering ML and software solutions for diverse clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PinContainer
                title="Blunge Background Removal"
                href="https://github.com/amlannag/Blunge.AI-Background-Removal"
              >
                <div className="flex flex-col p-4 text-slate-100/50 w-full md:w-[20rem]">
                  <h3 className="font-bold text-base text-slate-100">Background Removal</h3>
                  <p className="text-slate-500 text-sm">
                    Implemented a state-of-the-art background removal pipeline with fine-tuned segmentation models and hyperparameter optimization.
                  </p>
                  <div className="rounded-lg mt-4">
                    <Image
                      src="/blungegif.gif"
                      alt="Blunge Background Removal"
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </PinContainer>
              <div className="flex flex-wrap items-center gap-4 justify-center">
                <Image
                  src="/ARK Logo.png"
                  alt="ARK Logo"
                  width={200}
                  height={100}
                  className="h-auto w-auto"
                />
                <Image
                  src="/International_Justice_Mission_Logo_2015.png"
                  alt="IJM Logo"
                  width={150}
                  height={100}
                  className="h-auto w-auto"
                />
                <Image
                  src="/naturefreedom logo.png"
                  alt="Nature Freedom Logo"
                  width={200}
                  height={100}
                  className="h-auto w-auto"
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
            <h3 className="text-lg md:text-2xl mb-4 text-white font-bold">
              UQ Winter Research
            </h3>
            <Tags tags={["YoloV8", "MatplotLib", "Pytorch", "DeepSORT"]} />
            <p className="text-neutral-400 text-sm md:text-base mb-6">
              Participated in the UQ Winter Research Program under Dr. Miao Xu. Fine-tuned YOLOv8 for object detection and added additional blocks for object tracking. The goal of this project was to quantify the game state for League of Legends and develop a reinforcement learning model to play the game.
            </p>
          </div>
        ),
      },
      {
        title: "2024 May",
        content: (
          <div>
            <h3 className="text-lg md:text-2xl mb-4 text-white font-bold">
              UQ Validate Accelerator
            </h3>
            <Tags tags={["Figma", "Object Classification", "NLP"]} />
            <p className="text-neutral-400 text-sm md:text-base mb-6">
              Was one of 10 winners who received funding in UQ’s startup program. I pitched and prototyped a SaaS job interview tool that integrated ChatGPT APIs and image detection models.
            </p>
          </div>
        ),
      },
      {
        title: "2024 Apr",
        content: (
          <div>
            <h3 className="text-lg md:text-2xl mb-4 text-white font-bold">
              Placed Top 1% in IMC Prosperity Globally
            </h3>
            <Tags tags={["MatplotLib", "Pytorch", "Statistics Libraries", "Financial Backtesting"]} />
            <p className="text-neutral-400 text-sm md:text-base mb-6">
              My team and I placed in the top 1% out of 13,000 students globally in the IMC Annual Trading Challenge. In this challenge, we analyzed market data from a wide range of agents and products to curate profitable trading strategies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PinContainer title="GitHub Repository" href="https://github.com/maxtownson/IMC_Prosperity_2">
                <div className="flex flex-col p-4 text-slate-100/50">
                  <h3 className="font-bold text-base text-slate-100">
                    IMC GitHub Repository
                  </h3>
                  <div className="rounded-lg mt-4">
                    <Image
                      src="/imc-vector-logo.png"
                      alt="IMC Logo"
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </PinContainer>
              <Image
                src="/tdfinal.png"
                alt="IMC Trading Chart"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2023 Dec",
        content: (
          <div>
            <h3 className="text-lg md:text-2xl mb-4 text-white font-bold">
              Exit MyIBTutor
            </h3>
            <Tags tags={["Leadership", "Accounting"]} />
            <p className="text-neutral-400 text-sm md:text-base mb-6">
              Decided to exit MyIBTutor to direct more attention toward technology and machine learning. Over the year, my co-founder and I grew the team to over 30 tutors and taught more than 300 concurrent students. We also partnered with several schools across Queensland to deliver workshops on pedagogy and time management.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Image
                src="/1710899712049.jpeg"
                alt="MyIBTutor Event"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
              />
              <Image
                src="/1710899761892.jpeg"
                alt="MyIBTutor Team"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2023 Jan",
        content: (
          <div>
            <h3 className="text-lg md:text-2xl mb-4 text-white font-bold">
              Co-founded MyIBTutor
            </h3>
            <p className="text-neutral-400 text-sm md:text-base mb-6">
              Co-founded MyIBTutor, a tutoring agency specializing in services for International Baccalaureate (IB) students. We delivered lectures at QASMT and grew the team into a small group of dedicated tutors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Image
                src="/46070_MyIBTutor_logo_BJ-01.png"
                alt="MyIBTutor Logo"
                width={400}
                height={300}
                className="rounded-lg object-contain w-full h-auto"
              />
              <Image
                src="/first lecture 1.png"
                alt="MyIBTutor Lecture"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
              />
            </div>
          </div>
        ),
      },
    
  ];

export default data;