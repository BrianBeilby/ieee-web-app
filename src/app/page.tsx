"use client";
import Image from "next/image";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import { Spotlight } from "@/components/Spotlight";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { useRef } from "react";
import { projectData } from "@/app/projectData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const customTheme: CustomFlowbiteTheme["carousel"] = {
  root: {
    leftControl: "hidden",
    rightControl: "hidden",
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
            Sacramento State IEEE
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
            <div key={index} className="relative w-full h-full">
              {isMobile ? (
                <Image
                  src={project.imageUrl}
                  alt="Project I worked on"
                  quality={95}
                  fill
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <motion.div
                  ref={ref}
                  style={{
                    scale: scaleProgess,
                    opacity: opacityProgess,
                  }}
                  className="group mb-3 sm:mb-8 last:mb-0"
                >
                  <section className="bg-gray-100 max-w-full border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem] hover:bg-gray-200 transition sm:group-even:pl-8 text-white bg-white/10 hover:bg-white/20">
                    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                      <h3 className="text-2xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-gray-700 text-white/70">
                        {project.description}
                      </p>
                      <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {project.tags.map((tag, index) => (
                          <li
                            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"
                            key={index}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Image
                      src={project.imageUrl}
                      alt="Project I worked on"
                      quality={95}
                      width={900}
                      height={900}
                      className="absolute hidden sm:block top-8 -right-20 w-[28.25rem] rounded-t-lg shadow-2xl
                            transition 
                            group-hover:scale-[1.04]
                            group-hover:-translate-x-3
                            group-hover:translate-y-3
                            group-hover:-rotate-2

                            group-even:group-hover:translate-x-3
                            group-even:group-hover:translate-y-3
                            group-even:group-hover:rotate-2

                            group-even:right-[initial] group-even:-left-40"
                    />
                  </section>
                </motion.div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
