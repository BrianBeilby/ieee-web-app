"use client";
import React, { SetStateAction, useRef, useState } from "react";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import SectionDivider from "@/components/section-divider";
import OutlinedCard from "@/components/Card";
import Image from "next/image";
import { FaArrowCircleDown } from "react-icons/fa";
import ImageModal from "@/components/ImageModal";

const scrollToElement = () => {
  const viewportHeight = window.innerHeight;
  let scrollPercentage = 0.7; // Default scroll percentage

  /*
  if (viewportHeight <= 600) {
    scrollPercentage = 0.6; // Lower scroll percentage for smaller viewports
  } else if (viewportHeight >= 1000) {
    scrollPercentage = 0.9; // Higher scroll percentage for larger viewports
  }
  */
  const targetPosition = viewportHeight * scrollPercentage;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
};

const arrowVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop", // Ensure this is a specific string literal, not just 'string'
    },
  },
};

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const imageVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.4 } },
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.33 1.33"],
  });

  const openModalWithImage = (imageUrl: SetStateAction<string>) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageClick = (imageUrl: SetStateAction<string>) => {
    openModalWithImage(imageUrl);
  };

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <section className="container my-24 mx-auto md:px-8 mb-4 ">
      <div className="bg-transparent py-8 opacity-90">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
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
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
            className="container mx-auto px-6 text-lg md:text-xl text-white mb-14 max-w-[45rem] text-center leading-8 sm:mb-18"
          >
            <p className="text-lg md:text-xl text-white">
              Welcome to the Institute of Electronic and Electrical Engineering
              chapter at Sacramento State! The IEEE Electrical Engineering Club
              has been a vibrant hub for students passionate about electrical
              engineering and related topics. This chapter serves as a hub for
              students to network study
            </p>
            <div className="flex justify-center items-center mt-8">
              <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ] position: relative; transform-style: preserve-3d;">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="h-full">
                    <article className="h-full">
                      <div className="h-full">
                        <div className="relative">
                          <motion.div
                            className="mx-auto max-w-[45rem]"
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            <div
                              onClick={() =>
                                handleImageClick("/images/ieee_members2.jpg")
                              }
                              className="relative overflow-hidden cursor-pointer hover:brightness-110"
                            >
                              <Image
                                width={650}
                                height={350}
                                src="/images/ieee_members2.jpg"
                                alt=""
                                className="rounded-lg"
                              />
                            </div>
                            <ImageModal
                              width={2542}
                              height={930}
                              title="2024 IEEE Members"
                              isOpen={isModalOpen}
                              imageUrl={modalImageUrl}
                              onClose={closeModal}
                            />
                          </motion.div>
                          <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-blue-900 -ml-2 -mt-2 rounded-lg"></div>
                          <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-blue-900 -mr-2 -mb-2 rounded-lg"></div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={arrowVariants}
            animate="animate"
            onClick={scrollToElement}
            style={{ cursor: "pointer" }}
          >
            <div className="text-white w-14 h-14 text-5xl cursor-pointer z-10 mb-10">
              <FaArrowCircleDown />
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            style={{ scale: scrollYProgress, opacity: scrollYProgress }}
            className="flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out "
          >
            {" "}
            <motion.div className="container mx-auto px-6 text-lg md:text-xl text-white mb-8 max-w-[45rem] text-center leading-8 sm:mb-30">
              <h2 className="text-3xl font-extrabold mb-8 tracking-tight text-white">
                Our Goal
              </h2>
              <p className="">
                Provide students with insight and knowledge about the field of
                electrical engineering. We seek to assist our members gain
                exposure to the power industry through meetings, projects and
                other activities, as well as providing students the necessary
                tools for success.
              </p>
            </motion.div>
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
              <div className="flex items-center">
                <div className="relative w-full max-w-md h-1/2">
                  <div
                    onClick={() =>
                      handleImageClick("/images/PowerLab_cropped.jpg")
                    }
                    className="relative cursor-pointer hover:brightness-110"
                  >
                    <Image
                      width={2296}
                      height={2516}
                      src="/images/PowerLab_cropped.jpg"
                      className="w-full rounded-lg h-1/2"
                      alt={""}
                    />

                    <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-blue-900 -ml-2 -mt-2 rounded-lg"></div>

                    <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-blue-900 -mr-2 -mb-2 rounded-lg"></div>
                  </div>
                  <ImageModal
                    width={1600}
                    height={800}
                    title="CSUS Power Lab"
                    isOpen={isModalOpen}
                    imageUrl={modalImageUrl}
                    onClose={closeModal}
                  />
                </div>

                <div className="ml-6">
                  <p>
                    {" "}
                    Take a look at our lab donated by SMUD and powered by LN
                    Soft{" "}
                  </p>
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
            >
              <div className="min-h-screen flex flex-col lg:flex-row items-center p-8 sm:p-16 md:p-24 justify-center">
                {/* Event Showcase  */}
                <div data-theme="teal" className="mx-auto max-w-6xl">
                  <h2 className="sr-only">Featured case study</h2>
                  <section className="font-sans text-white">
                    <div className="lg:flex lg:items-center">
                      <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        {" "}
                        {/* Image */}
                        <motion.div
                          initial={{ opacity: 0, y: 100 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="w-full max-w-md lg:max-w-lg mr-4"
                        >
                          <div className="h-full">
                            <article className="h-full">
                              <div className="h-full">
                                <div
                                  onClick={() =>
                                    handleImageClick(
                                      "/images/Screen_Shot_2024-02-20_at_2.28.38_PM.png"
                                    )
                                  }
                                  className="relative cursor-pointer hover:brightness-110"
                                >
                                  <Image
                                    width={674}
                                    height={248}
                                    src="/images/Screen_Shot_2024-02-20_at_2.28.38_PM.png"
                                    className="rounded-lg object-contain"
                                    alt={""}
                                  />
                                  <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-blue-900 -ml-2 -mt-2 rounded-lg"></div>
                                  <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-blue-900 -mr-2 -mb-2 rounded-lg"></div>
                                </div>
                                <ImageModal
                                  width={400}
                                  height={200}
                                  title="IEEE PES Logo"
                                  isOpen={isModalOpen}
                                  imageUrl={modalImageUrl}
                                  onClose={closeModal}
                                />
                              </div>
                            </article>
                          </div>
                        </motion.div>
                      </div>
                      <div className="p-2 bg-gray lg:flex-1">
                        {" "}
                        {/* Text */}
                        <motion.div
                          initial={{ opacity: 0, y: 100 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className="leading-relaxed">
                            <h2 className="leading-tight text-4xl font-bold">
                              How to become a member
                            </h2>
                            <p className="mt-4">
                              Sign up to IEEE to become an official member and
                              dive into the exciting world of Electronic
                              Engineering. Whether you&apos;re a seasoned
                              enthusiast or simply curious about the field,
                              everyone is invited to join us in exploring the
                              latest advancements in electronic technology.
                            </p>
                            <p className="mt-4">
                              It will cost $16 to be an official student member
                              of IEEE. You can join by clicking the link&nbsp;
                              <Link
                                className="group inline-block px-3 py-1 bg-black text-yellow rounded-full border border-black hover:border-gray-950 hover:scale-110 transition duration-300"
                                href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                here
                              </Link>
                              . &nbsp; Once a member, be sure to visit our
                              events page for more information on upcoming
                              opportunities.
                            </p>
                            <p>
                              <Link
                                href="/events"
                                className="mt-2 group bg-black text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                              >
                                Explore Events{" "}
                                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                              </Link>
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
            <OutlinedCard />
            <SectionDivider />
            <div className="container mx-auto px-6 text-lg md:text-xl text-white mb-10 max-w-[45rem] text-center leading-8 sm:mb-10">
              <h3 className="text-3xl font-extrabold mb-8 tracking-tight text-white mt-8">
                Contact Us{" "}
              </h3>

              <p className="text-lg md:text-xl text-white mb-4">
                Do you have any questions, suggestions, or ideas? We&apos;d love
                to hear from you! Whether you&apos;re a current member,
                prospective student, or someone interested in collaborating with
                us, feel free to reach out. Our team is here to help and support
                you in any way we can. Let&apos;s connect and work together to
                create a vibrant community of electrical engineering
                enthusiasts!
              </p>

              <Link
                href="/contact"
                className="group bg-black text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-grey-950 active:scale-105 transition"
              >
                Contact Us here{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </motion.div>{" "}
          {/* End of scroll element */}
        </div>
      </div>
    </section>
  );
}
