"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import SectionDivider from "@/components/section-divider";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 1"],
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
          >
            <SectionDivider />
          </motion.div>

          <motion.div
            ref={ref}
            style={{ scale: scrollYProgress, opacity: scrollYProgress }}
            className="flex flex-col items-center justify-center"
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
              <h3 className="text-3xl font-extrabold mb-8 tracking-tight text-white">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
