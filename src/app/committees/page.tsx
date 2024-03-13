"use client";
import { HoverEffect } from "@/components/HoverEffect";
import { Boxes } from "@/components/BackgroundBoxes";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { IconType } from "react-icons";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { BackgroundBeams } from "@/components/BackgroundBeams";

interface SocialIconDetails {
  icon: IconType;
  color: string;
}

interface SocialIcons {
  [key: string]: SocialIconDetails;
}

// Use the interface to type your icons mapping
const socialIcons: SocialIcons = {
  twitter: {
    icon: FaTwitter,
    color: "#1DA1F2", // Twitter color
  },
  linkedin: {
    icon: FaLinkedin,
    color: "#0077b5", // LinkedIn color
  },
  instagram: {
    icon: FaInstagram,
    color: "#E1306C", // Instagram color
  },
  github: {
    icon: FaGithub,
    color: "#f5f5f5", // GitHub color
  },
  // Add more mappings as needed
};

export default function Committees() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="bg-white dark:bg-gray-900 rounded-lg backdrop-blur-[30px]">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
          {sections.map((section) => (
            <div key={section.name}>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white text-center my-10">
                {section.name}
              </h3>
              <div className="flex justify-center items-start flex-wrap mb-6 lg:mb-16">
                {section.members.map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-wrap items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 mb-4 overflow-hidden"
                  >
                    <div className="flex flex-col items-center p-4">
                      <div className="relative w-32 h-32 flex-none overflow-hidden rounded-full">
                        <Image
                          className="rounded-t-lg"
                          src={member.img}
                          alt={`${member.name} Avatar`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className="p-4 flex-grow">
                      <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center break-words w-full px-2">
                        {member.name}
                      </h3>
                      <span className="text-gray-500 dark:text-gray-400">
                        {member.role}
                      </span>
                      <ul className="flex flex-wrap justify-start space-x-1 mt-3">
                        {Object.entries(member.socials).map(
                          ([platform, url]) => {
                            const IconDetail =
                              socialIcons[platform.toLowerCase()];
                            if (!IconDetail) return null;
                            const { icon: Icon, color } = IconDetail;
                            return (
                              <li key={platform}>
                                <a
                                  href={url}
                                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                  style={{ color: color }}
                                  target="_blank"
                                >
                                  <Icon className="w-5 h-5" />
                                </a>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const sections = [
  {
    name: "Executives",
    members: [
      {
        name: "Pasquale De Luca",
        role: "President",
        img: "/images/pasquale.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/pasquale-de-luca-ab5355256/",
          // Add more social links as needed
        },
      },
      {
        name: "Joshua De Gruccio",
        role: "Treasurer",
        img: "/images/josh.jpg",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://www.linkedin.com/in/joshua-de-gruccio-5461272b6/",
          // Add more social links as needed
        },
      },
      {
        name: "Jayden Matt",
        role: "Vice President",
        img: "/images/jayden.jpg",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://www.linkedin.com/in/jayden-matt-b6b032265/",
          // Add more social links as needed
        },
      },
      {
        name: "Slav Kolesnikovich",
        role: "Secretary/Social Manager",
        img: "/images/slavik.jpg",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://www.linkedin.com/in/slavkoles/",
          // Add more social links as needed
        },
      },
      // Add more executives
    ],
  },
  {
    name: "Activities",
    members: [
      {
        name: "Brian Beilby",
        role: "Chair",
        img: "/images/ProHeadshot1.png",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://linkedin.com/in/bonniegreen",
          // Add more social links as needed
        },
      },
      {
        name: "Brian Beilby",
        role: "Chair",
        img: "/images/ProHeadshot1.png",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://linkedin.com/in/bonniegreen",
          // Add more social links as needed
        },
      },
      {
        name: "Brian Beilby",
        role: "Chair",
        img: "/images/ProHeadshot1.png",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://linkedin.com/in/bonniegreen",
          // Add more social links as needed
        },
      },
      // Define members similar to above
    ],
  },
  {
    name: "Marketing",
    members: [
      {
        name: "Brian Beilby",
        role: "Chair",
        img: "/images/ProHeadshot1.png",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://linkedin.com/in/bonniegreen",
          github: "https://github.com/BrianBeilby",
          // Add more social links as needed
        },
      },
      {
        name: "Brian Beilby",
        role: "Chair",
        img: "/images/ProHeadshot1.png",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://linkedin.com/in/bonniegreen",
          github: "https://github.com/BrianBeilby",
          // Add more social links as needed
        },
      },
      {
        name: "Brian Beilby",
        role: "Chair",
        img: "/images/ProHeadshot1.png",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://linkedin.com/in/bonniegreen",
          github: "https://github.com/BrianBeilby",
          // Add more social links as needed
        },
      },
      {
        name: "Brian Beilby",
        role: "Chair",
        img: "/images/ProHeadshot1.png",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://linkedin.com/in/bonniegreen",
          github: "https://github.com/BrianBeilby",
          // Add more social links as needed
        },
      },
      {
        name: "Brian Beilby",
        role: "Chair",
        img: "/images/ProHeadshot1.png",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://linkedin.com/in/bonniegreen",
          github: "https://github.com/BrianBeilby",
          // Add more social links as needed
        },
      },
      {
        name: "Brian Beilby",
        role: "Chair",
        img: "/images/ProHeadshot1.png",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://linkedin.com/in/bonniegreen",
          github: "https://github.com/BrianBeilby",
          // Add more social links as needed
        },
      },
      // Define members similar to above
    ],
  },
  {
    name: "Website and IT",
    members: [
      {
        name: "Brian Beilby",
        role: "Chair",
        img: "/images/ProHeadshot1.png",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://linkedin.com/in/bonniegreen",
          // Add more social links as needed
        },
      },
      {
        name: "Michael Mehrdadi",
        role: "Chair",
        img: "/images/mike.jpg",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://www.linkedin.com/in/michael-mehrdadi-342191272/",
          // Add more social links as needed
        },
      },
      {
        name: "Brian Beilby",
        role: "Chair",
        img: "/images/ProHeadshot1.png",
        socials: {
          twitter: "https://twitter.com/bonniegreen",
          linkedin: "https://linkedin.com/in/bonniegreen",
          // Add more social links as needed
        },
      },
      // Define members similar to above
    ],
  },
  // Add more sections as needed
];
