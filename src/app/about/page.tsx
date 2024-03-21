"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import SectionDivider from "@/components/section-divider";
import OutlinedCard from "@/components/Card";
import Image from "next/image";

const scrollToTwentyPercent = () => {
  const windowHeight = window.innerHeight;
  const twentyPercentOfWindow = windowHeight * 0.9;

  window.scrollTo({
    top: twentyPercentOfWindow,
    behavior: "smooth",
  });
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.33 1.33"],
  });

  return (
    <section className="container my-24 mx-auto md:px-8 mb-4 ">
      <div className="bg-transparent py-8 opacity-90">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className="container mx-auto px-4 text-center"
          >
            <div className=" py-4">
              <h1 className="text-5xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
                About Us
              </h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.5,
            }}
            className="container mx-auto px-6 text-lg md:text-xl text-white mb-28 max-w-[45rem] text-center leading-8 sm:mb-35"
          >
            <p className="text-lg md:text-xl text-white">
              Welcome to the Electrical Engineering Club at Sacramento State!
              Established in 2024, the Electrical Engineering Club has been a
              vibrant hub for students passionate about electrical engineering.
              From its humble beginnings, the club has grown into a community of
              enthusiastic learners and innovators dedicated to advancing the
              field of electrical engineering.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="container mx-auto px-6 text-lg md:text-xl text-white mb-8 max-w-[45rem] text-center leading-8 sm:mb-30"
          >
            <h2 className="text-3xl font-extrabold mb-8 tracking-tight text-white">
              Furthermore
            </h2>
            <p className="">
              At the Electrical Engineering Club, our mission is to foster a
              collaborative environment where students can explore, learn, and
              innovate in the field of electrical engineering. We aim to provide
              opportunities for students to enhance their technical skills,
              engage in hands-on projects, and connect with industry
              professionals.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onClick={scrollToTwentyPercent}
            style={{ cursor: "pointer" }}
          >
            <SectionDivider />
          </motion.div>
          <motion.div
            ref={ref}
            style={{ scale: scrollYProgress, opacity: scrollYProgress }}
            className="flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out "
          >
            {" "}
            {/*Motion Element Start  */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
              className="container mx-auto px-6 text-lg md:text-xl text-white mb-28 max-w-[45rem] text-center leading-8 sm:mb-30"
            >
              <h3 className="text-3xl font-extrabold mb-8 tracking-tight text-white">
                What We Do
              </h3>
              <ul className="list-disc pl-5">
                <li className="mb-3">
                  <strong>Technical Workshops:</strong> We organize workshops on
                  various topics in electrical engineering, ranging from circuit
                  design to embedded systems.
                </li>
                <li className="mb-3">
                  <strong>Project Competitions:</strong> We host project
                  competitions where students can showcase their creativity and
                  problem-solving abilities.
                </li>
                <li className="mb-3">
                  <strong>Guest Lectures:</strong> We invite industry experts
                  and academic scholars to deliver talks and share their
                  insights into the latest developments in electrical
                  engineering.
                </li>
                <li className="mb-3">
                  <strong>Networking Events:</strong> We arrange networking
                  events to facilitate connections between students, alumni, and
                  industry professionals.
                </li>
                <li className="mb-3">
                  <strong>Community Outreach:</strong> We engage in community
                  outreach activities, such as STEM education initiatives and
                  volunteering projects, to give back to society.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.175,
              }}
              className="container mx-auto px-6 text-lg md:text-xl text-white mb-10 max-w-[45rem] text-center leading-8 sm:mb-10"
            >
              <div className="flex items-center ">
                <div className="relative w-full max-w-md">
                  <div className="relative">
                    <Image
                      width={733}
                      height={412}
                      src="/images/wp4918510-desktop-bmw-e30-wallpapers.jpg"
                      className="w-full rounded-lg"
                      alt={""}
                    />

                    <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-blue-900 -ml-2 -mt-2 rounded-lg"></div>

                    <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-blue-900 -mr-2 -mb-2 rounded-lg"></div>
                  </div>
                </div>

                <div className="ml-6">
                  <p> Look at all the fun our members have </p>
                </div>
              </div>

              <h3 className="text-3xl font-extrabold mb-8 tracking-tight text-white mt-8">
                Join Us!{" "}
              </h3>

              <p className="text-lg md:text-xl text-white">
                Whether you&apos;re a seasoned electrical engineering student or
                just starting your journey in the field, we welcome you to join
                us at the Electrical Engineering Club. Together, let&apos;s
                explore the fascinating world of electrical engineering and make
                a positive impact on the future of technology!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className=""
            >
              <SectionDivider />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="group bg-black text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-grey-950 active:scale-105 transition"
              >
                Contact Us here{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>
            <SectionDivider />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center">
                {" "}
                {/* Event Showcase  */}
                <div data-theme="teal" className="mx-auto max-w-6xl">
                  <h2 className="sr-only">Featured case study</h2>
                  <section className="font-sans text-white">
                    <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ] position: relative; transform-style: preserve-3d;">
                      <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                        <div className="h-full">
                          <article className="h-full">
                            <div className="h-full">
                              <div className="relative">
                                <Image
                                  width={600}
                                  height={350}
                                  src="/images/wp4918510-desktop-bmw-e30-wallpapers.jpg"
                                  className="h-full object-cover"
                                  alt={""}
                                />
                                <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-blue-900 -ml-2 -mt-2 rounded-lg"></div>
                                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-blue-900 -mr-2 -mb-2 rounded-lg"></div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="p-2 bg-grey">
                        <div className="leading-relaxed">
                          <h2 className="leading-tight text-4xl font-bold">
                            IEEE: Event
                          </h2>
                          <p className="mt-4">
                            Join us for our upcoming event at the Sacramento
                            State Well, where we&apos;ll dive into the exciting
                            world of Electronic Engineering.&nbsp;Whether
                            you&apos;re a seasoned enthusiast or simply curious
                            about the field, everyone is invited to join us in
                            exploring the latest advancements in electronic
                            technology.
                          </p>
                          <p className="mt-4">
                            This event is a fantastic opportunity to learn
                            alongside fellow students and industry experts,
                            gaining valuable insights and expanding your
                            understanding of electronic engineering. &nbsp; Be
                            sure to visit our events page linked below for more
                            information on this event and other upcoming
                            opportunities
                          </p>
                          <p>
                            <Link
                              href="/events"
                              className="mt-6 group bg-black text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-grey-950 active:scale-105 transition"
                            >
                              Explore Events{" "}
                              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
            <SectionDivider />
            <OutlinedCard />
            <SectionDivider />
          </motion.div>{" "}
          {/* End of scroll element */}
        </div>
      </div>
    </section>
  );
}
