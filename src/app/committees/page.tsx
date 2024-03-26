"use client";
import Image from "next/image";
import { IconType } from "react-icons";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

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
      <section className="bg-transparent rounded-lg">
        <div className="py-4 px-1 mx-auto max-w-screen-xl lg:py-8 lg:px-2">
          {sections.map((section) => (
            <div key={section.name} className="mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-10">
                {section.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {section.members.map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 overflow-hidden"
                    style={{
                      minWidth: "250px",
                      maxWidth: "calc(100% / 5 - 1rem)",
                    }}
                  >
                    <div className="flex flex-col items-center p-4">
                      <div className="relative w-32 h-32 flex-none overflow-hidden rounded-full">
                        <Image
                          className="rounded-t-lg"
                          src={member.img}
                          alt={`${member.name} Avatar`}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="p-4 flex-grow flex flex-col text-center">
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {member.name}
                        </h3>
                        <div className="mt-auto">
                          <span className="text-gray-500 dark:text-gray-400">
                            {member.role}
                          </span>
                        </div>

                        <ul className="flex flex-wrap justify-center space-x-1 mt-2">
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
    description:
      "The executive team is responsible for the overall management of the club. They are responsible for the club's operations, finances, and strategic direction.",
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
          linkedin: "https://www.linkedin.com/in/joshua-de-gruccio-5461272b6/",
          // Add more social links as needed
        },
      },
      {
        name: "Jayden Matt",
        role: "Vice President",
        img: "/images/jayden.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/jayden-matt-b6b032265/",
          // Add more social links as needed
        },
      },
      {
        name: "Slav Kolesnikovich",
        role: "Secretary/Social Manager",
        img: "/images/slavik.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/slavkoles/",
          // Add more social links as needed
        },
      },
      // Add more executives
    ],
  },
  {
    name: "Activities",
    description:
      "The activities team is responsible for planning and executing events for the club. They are responsible for the club's events, workshops, and socials.",
    members: [
      {
        name: "Brian Beilby",
        role: "Director",
        img: "/images/ProHeadshot1.png",
        socials: {
          linkedin: "https://www.linkedin.com/in/brian-beilby-7b728923b/",
          github: "https://github.com/BrianBeilby",
          // Add more social links as needed
        },
      },
      {
        name: "John Shifftler",
        role: "Member",
        img: "/images/dfsdfsfsdfs.png",
        socials: {
          twitter: "https://twitter.com/Cobratate",
          // Add more social links as needed
        },
      },
      {
        name: "Brian Beilby",
        role: "Director",
        img: "/images/ProHeadshot1.png",
        socials: {
          linkedin: "https://www.linkedin.com/in/brian-beilby-7b728923b/",
          github: "https://github.com/BrianBeilby",
          // Add more social links as needed
        },
      },
      // Define members similar to above
    ],
  },
  {
    name: "Marketing",
    description:
      "The marketing team is responsible for promoting the club and its events. They are responsible for the club's social media, website, and branding.",
    members: [
      {
        name: "Joseph Muniz",
        role: "Marketing Lead",
        img: "/images/joseph.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/jamunizca/?trk=contact-info",
          // Add more social links as needed
        },
      },
      // Define members similar to above
    ],
  },
  {
    name: "Website and IT",
    description:
      "The website and IT team is responsible for maintaining the club's website and other IT related tasks. They are responsible for the club's website, email, and other IT related tasks.",
    members: [
      {
        name: "Brian Beilby",
        role: "Director",
        img: "/images/ProHeadshot1.png",
        socials: {
          linkedin: "https://www.linkedin.com/in/brian-beilby-7b728923b/",
          github: "https://github.com/BrianBeilby",
          // Add more social links as needed
        },
      },
      {
        name: "Michael Mehrdadi",
        role: "Officer",
        img: "/images/mike.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/michael-mehrdadi-342191272/",
          github: "https://github.com/Puffy12",
          // Add more social links as needed
        },
      },
      // Define members similar to above
    ],
  },
  // Add more sections as needed
];
