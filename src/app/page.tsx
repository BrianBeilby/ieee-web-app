"use client";
import Image from "next/image";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import { Spotlight } from "@/components/Spotlight";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { useRef } from "react";
import { projectData } from "@/app/projectData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import CarouselItem from "@/components/CarouselItem";

const customTheme: CustomFlowbiteTheme["carousel"] = {
  root: {
    "base": "relative h-full w-full",
    "leftControl": "absolute -left-5 top-0 flex h-full items-center justify-center px-4 focus:outline-none ",
    "rightControl": "absolute -right-5 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
  },  control: {
    "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    "icon": "h-5 w-5 text-white dark:text-gray-900 sm:h-6 sm:w-6"
  },
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIfMobile(); // Check on initial mount
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return isMobile;
}

export default function Home() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="container my-12 mx-auto px-4 sm:px-6 lg:px-8">
      <section className="bg-center bg-no-repeat bg-transparent bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl text-center py-10 lg:py-20">
          <Spotlight
            className="-top-16 left-10 md:left-20 md:-top-36 lg:left-60 lg:-top-40 xl:left-96 xl:-top-48"
            fill="white"
          />
          <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white">
            IEEE at Sacramento State
          </h1>
          <TextGenerateEffect
            className="mb-4 text-lg sm:text-xl md:text-2xl"
            words={"Advancing Technology For Humanity"}
          />
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/about"
              className="inline-flex items-center justify-center py-2 px-4 text-sm sm:text-base md:text-lg font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 hover:text-gray-900"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-screen-md h-56 sm:h-64 lg:h-80 xl:h-80 2xl:h-96 relative">
        <Carousel slide={true} indicators={false} theme={customTheme}>
          {projectData.map((project, index) => (
            <CarouselItem
              key={index}
              id={index}
              project={project}
              isMobile={isMobile}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
