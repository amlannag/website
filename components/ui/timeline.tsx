"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width and set mobile state
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 480);
    };

    // Check initial width
    checkMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkMobile);

    // Clean up event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black bg-neutral-900 font-sans swap:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-5 px-4 swap:px-8 lg:px-10">
        <h2 className="text-xl swap:text-4xl mb-4 text-white dark:text-white max-w-4xl font-bold">
          Past experiences
        </h2>
        <p className="text-neutral-300 dark:text-neutral-300 swap:text-3xl text-xl mb-0 swap:text-xl">
          Here is a timeline of some of the cool things I have done recently. For more information on please visit my projects or resume.
        </p>
      </div>
    
      <div ref={ref} className="relative max-w-7xl -mt-2 mx-auto pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-10 swap:pt-40 gap-6 swap:gap-10"
          >
            {/* Conditionally render the left section for non-mobile views */}
            {!isMobile && (
              <div className="sticky flex flex-col swap:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm swap:w-full">
                <div className="h-10 absolute left-3 swap:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden swap:block text-xl swap:pl-20 swap:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
              </div>
            )}
    
            {/* Adjust padding and width for mobile */}
            <div className={`relative w-full ${isMobile ? 'pl-4 pr-4' : 'pl-20 pr-4 swap:pl-4'}`}>
              <h3 className={`${isMobile ? 'text-2xl mb-4' : 'swap:hidden'} block text-left font-bold text-neutral-500 dark:text-neutral-500`}>
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>      
        ))}
        
        {/* Conditionally render the timeline line for non-mobile views */}
        {!isMobile && (
          <div
            style={{
              height: height + "px",
            }}
            className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};