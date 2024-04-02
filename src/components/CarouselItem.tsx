import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectData {
  title: string;
  description: string;
  tags: Array<string>;
  imageUrl: string;
  citation?: string;
}

interface CarouselItemProps {
  project: ProjectData;
  isMobile: boolean;
  id: number;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  project,
  isMobile,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    initial: { y: 0 },
    hover: { y: -10 },
  };

  const citationVariants = {
    initial: { y: 50, opacity: 0 },
    hover: { y: 0, opacity: 1 },
  };

  return (
    <div
      key={id}
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isMobile ? (
        <Image
          src={project.imageUrl}
          alt={project.title}
          quality={95}
          fill
          style={{ objectFit: "cover" }}
        />
      ) : (
        <motion.div
          className="group mb-3 sm:mb-8 last:mb-0"
          initial={{ scale: 0.8, opacity: 0.9 }}
          animate={{
            scale: isHovered ? 1.04 : 1,
            opacity: isHovered ? 1 : 0.9,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <section className="bg-gray-100 max-w-full border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem] hover:bg-gray-200 transition sm:group-even:pl-8 text-white bg-white/10 hover:bg-white/20">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 text-white/70">
                {project.description}
              </p>
              <motion.div
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                variants={containerVariants}
                transition={{ duration: 0.5 }}
                className="mt-4"
              >
                <ul className="flex flex-wrap gap-2 sm:mt-auto">
                  {project.tags.map((tag, index) => (
                    <li
                      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.citation && (
                  <motion.div
                    variants={citationVariants}
                    transition={{ duration: 0.5 }}
                    className="bg-black/[0.3] inline-flex px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full text-white/70 mt-6"
                  >
                    {project.citation}
                  </motion.div>
                )}
              </motion.div>
            </div>

            <Image
              src={project.imageUrl}
              alt={project.title}
              quality={95}
              width={900}
              height={900}
              className="absolute hidden sm:block top-8 -right-20 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
            />
          </section>
        </motion.div>
      )}
    </div>
  );
};

export default CarouselItem;
