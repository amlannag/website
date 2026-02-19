import Tags from '@/components/ui/tags';
import { PinContainer } from "@/components/ui/3d-pin";
import Image from 'next/image';

const data = [
  {
    title: "2026 Feb",
    content: (
      <div>
        <h3 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          Research Assistant
        </h3>
        <Tags tags={["Research", "ML",]} />
        <p className="text-neutral-400 dark:text-neutral-200 text-lg md:text-xl font-normal">
        Currently working as a research assistant under Dr Shakes Chandra, researching deeplearning and frequency domain representations for MRI applications.
        </p>
      </div>
    ),
  }
  ,
  {
    title: "2025 November",
    content: (
      <div>
        <h3 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          IMC Quantitative Research Intern
        </h3>
        <Tags tags={["Python", "ML",]} />
        <p className="text-neutral-400 dark:text-neutral-200 text-lg md:text-xl font-normal">
        Worked in the delta 1 team as a quantitative research intern. I primarity focused on creating MLP architectures for equity return predictions in the MFT space. 

        </p>
          <div className="grid grid-cols-1 mt-5 switch1:grid-cols-2 justify-center items-center switch1:mb-10 gap-y-8">
            <div className="bg-white rounded-lg mx-auto h-60 w-100 flex items-center justify-center">
              <Image
                src="/imc-vector-logo.png"
                alt="startup template"
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
        </div>
      </div>
    ),
  }
  ,
  {
    title: "2025 May",
    content: (
      <div>
        <h3 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          PwC Data Science and Cyber Intern
        </h3>
        <Tags tags={["Data Science Libs", "Docker", "Hugging Face", "ComfyUI"]} />
        <p className="text-neutral-400 dark:text-neutral-200 text-lg md:text-xl font-normal">
        I worked on a firm-wide data science project exploring how employees use internal LLM tools. Using NLP and statistical learning methods, such as Gaussian Mixture Models and hierarchical clustering, I analysed over 200,000 prompts to identify patterns in how people interacted with generative AI. The end result was a “ChatGPT Wrapped”-style dashboard that transformed raw usage data into engaging, interpretable insights for the entire firm.
        I also spent time with the Cyber team, where I helped run NIST assessments for ASX-listed companies.
        </p>
          <div className="grid grid-cols-1 mt-5 switch1:grid-cols-2 justify-center items-center switch1:mb-10 gap-y-8">
            <div className="bg-white rounded-lg mx-auto h-60 w-100 flex items-center justify-center">
              <Image
                src="/pwc_logo.png"
                alt="startup template"
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
        </div>
      </div>
    ),
  },
  {
    title: "2025 Jan",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          NCP Scholarship 
        </h3>
        <p className="text-neutral-400 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
          I was awarded the prestigious New Colombo Scholarship, which provides students with the opportunity to participate in fully funded internships and exchange programs abroad. I am currently studying at HKU specializing in machine learning, mathematical research and quantitative finance!
        </p>
        <div className="grid grid-cols-1 switch1:grid-cols-2 justify-center items-center gap-[20px]">
          <Image
            src="/ncp-crest-vertical_34f5be00-2858-329f-8a84-8c2e02a511e5.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg mx-auto object-contain h-16 md:h-32 lg:h-60 w-full"
          />
          <Image
            src="/IMG_9349-2.jpg"
            alt="startup template"
            width={400}
            height={300}
            className="rounded-lg mx-auto object-cover h-60 w-100"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024 Nov",
    content: (
      <div>
        <h3 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          Blunge - Machine Learning Engineer
        </h3>
        <Tags tags={["Fly.io", "Docker", "Hugging Face", "ComfyUI"]} />
        <p className="text-neutral-400 dark:text-neutral-200 text-lg md:text-xl font-normal">
          Worked as a Machine Learning Engineer and researcher at Blunge, where I developed image-to-video generation capabilities for their fine-tuned Stable Diffusion models.
          I also contributed to a variety of other projects, such as background removal, ComfyUI workflows, and backend integration. Additionally, I had the privilege of attending the HKSTP Techathon with Blunge in Hong Kong.
        </p>
        <div className="grid grid-cols-1 mt-5 switch1:grid-cols-2 justify-center items-center switch1:mb-10 gap-y-8">
          <PinContainer
            title="Blunge.ai"
            href="https://www.blunge.ai/"
          >
            <div className="flex flex-col justify-center items-center md:p-3 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] md:h-[15rem] h-[13rem]">
              <h3 className="md:max-w-xs max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center sm:text-left">
                Blunge.AI
              </h3>
              <div className="w-full flex justify-center md:justify-start rounded-lg mt-3">
                <Image
                  src="/guidence 9  steps 50.gif"
                  alt="startup template"
                  width={400}
                  height={400}
                  className="rounded-lg h-40 w-full"
                />
              </div>
            </div>
          </PinContainer>
          <Image
              src="/blungeHKSTP.JPEG"
              alt="startup template"
              width={400}
              height={300}
              className="rounded-lg mx-auto object-cover h-60 w-100"
          />
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
        <Tags tags={["React", "Node.js", "Firebase", "AWS", "JavaScript", "API Creation"]} />
        <p className="text-neutral-400 dark:text-neutral-200 text-lg md:text-xl font-normal">
          Participated in the Lab Accelerator as a software engineer for Fortus, where I contributed to building the frontend and backend of their gym app.
        </p>
        <div className="grid grid-cols-1 mt-5 switch1:grid-cols-2 justify-center items-center switch1:mb-10 gap-y-8">
          <PinContainer
            title="Fortus App"
            href="https://www.fortus.fit/"
          >
            <div className="flex flex-col justify-center items-center md:p-3 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] md:h-[15rem] h-[13rem]">
              <h3 className="md:max-w-xs max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center sm:text-left">
                Fortus App
              </h3>
              <div className="w-full flex justify-center md:justify-start rounded-lg mt-3">
                <Image
                  src="/Fortus.png"
                  alt="startup template"
                  width={400}
                  height={400}
                  className="rounded-lg h-40 w-full"
                />
              </div>
            </div>
          </PinContainer>
          <Image
              src="/IMG_8240.jpg"
              alt="startup template"
              width={400}
              height={300}
              className="rounded-lg mx-auto object-cover h-60 w-100"
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
          180 Degrees Consulting - Technology Consulting Director
        </h3>
        <Tags tags={["ML Fine-Tuning", "Data Pipelines", "Web Scraping", "NLP"]} />
        <p className="text-neutral-400 dark:text-neutral-200 text-lg md:text-xl font-normal">
          Over the course of 1.5 years, I led 5 consulting projects and supervised over 40 individual consultants. I worked on implementing machine learning and other software solutions for industrial clients who ranged from energy companies to not-for-profits.
        </p>
        <div className="grid grid-cols-1 switch1:grid-cols-2 justify-center items-center switch1:mb-10 gap-y-8 mt-10">
          <PinContainer
            title="Blunge Background Removal Project"
            href="https://github.com/amlannag/Blunge.AI-Background-Removal"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[24rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                Blunge Background Removal
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  This project implements a state-of-the-art background removal pipeline for images through fine-tuning segmentation models and hyperparameter optimization. It is also accompanied by a front-end interface and toolkit.
                </span>
              </div>
              <div className="w-full rounded-lg mt-4">
                <Image
                  src="/blungegif.gif"
                  alt="startup template"
                  width={400}
                  height={400}
                  className="rounded-lg h-40 w-full"
                />
              </div>
            </div>
          </PinContainer>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/New Project (2).png"
              alt="startup template"
              width={400}
              height={400}
              className="rounded-lg mx-auto object-cover h-100 w-100"
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
        <Tags tags={["YOLOv8", "Matplotlib", "PyTorch", "DeepSORT"]} />
        <p className="text-neutral-400 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
          Participated in the UQ Winter Research Program under Dr. Miao Xu. Fine-tuned YOLOv8 for object detection and added additional blocks for object tracking. The goal of this project was to quantify the game state for League of Legends and develop a reinforcement learning model to play the game.
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
        <Tags tags={["Matplotlib", "PyTorch", "Statistics Libraries", "Financial Backtesting"]} />
        <p className="text-neutral-400 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
          My team and I placed in the top 1% out of 13,000 students globally in the IMC Annual Trading Challenge. In this challenge, we analyzed market data from a wide range of agents and products to curate profitable trading strategies.
        </p>
        <div className="grid grid-cols-1 switch1:grid-cols-2 justify-center items-center switch1:mb-10 gap-y-4">
          <PinContainer
            title="GitHub Repository"
            href="https://github.com/maxtownson/IMC_Prosperity_2"
          >
            <div className="flex flex-col justify-center items-center md:items-start md:justify-start md:p-3 p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] md:h-[15rem] h-[14rem]">
              <h3 className="md:max-w-xs max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center md:text-left md:mt-0">
                IMC GitHub Repository
              </h3>
              <div className="w-full flex justify-center md:justify-start rounded-lg mt-3">
                <Image
                  src="/imc-vector-logo.png"
                  alt="startup template"
                  width={400}
                  height={400}
                  className="rounded-lg h-40 w-full"
                />
              </div>
            </div>
          </PinContainer>
          <Image
            src="/tdfinal.png"
            alt="startup template"
            width={400}
            height={300}
            className="rounded-lg mx-auto object-cover h-60 w-full"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023 Dec",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          Exit MyIBTutor
        </h3>
        <Tags tags={["Leadership", "Accounting"]} />
        <p className="text-neutral-400 dark:text-neutral-200 text-lg md:text-xl font-normal">
          Decided to exit MyIBTutor to direct more attention toward technology and machine learning. Over the year, my co-founder and I grew the team to over 30 tutors and taught more than 300 concurrent students. We also partnered with several schools across Queensland to deliver workshops on pedagogy and time management.
        </p>
        <div className="grid grid-cols-1 mt-10 switch1:grid-cols-2 justify-center items-center switch1:mb-10 gap-y-8">
          <Image
            src="/1710899712049.jpeg"
            alt="startup template"
            width={400}
            height={300}
            className="rounded-lg mx-auto object-cover h-60 w-100"
          />
          <Image
            src="/1710899761892.jpeg"
            alt="startup template"
            width={400}
            height={300}
            className="rounded-lg mx-auto object-cover h-60 w-100"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023 Jan",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          Co-founded MyIBTutor
        </h3>
        <p className="text-neutral-400 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
          Co-founded MyIBTutor, a tutoring agency specializing in services for International Baccalaureate (IB) students. We delivered lectures at QASMT and grew the team into a small group of dedicated tutors.
        </p>
        <div className="grid grid-cols-1 switch1:grid-cols-2 justify-center items-center gap-[20px]">
          <Image
            src="/46070_MyIBTutor_logo_BJ-01.png"
            alt="startup template"
            width={400}
            height={400}
            className="rounded-lg mx-auto object-contain h-16 md:h-32 lg:h-40 w-full"
          />
          <Image
            src="/first lecture 1.png"
            alt="startup template"
            width={400}
            height={300}
            className="rounded-lg mx-auto object-cover h-60 w-100"
          />
        </div>
      </div>
    ),
  },
    
  ];
  

export default data;