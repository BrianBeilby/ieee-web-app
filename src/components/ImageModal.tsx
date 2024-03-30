import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
  width: number;
  height: number;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  onClose,
  width,
  height,
}) => {
  if (!isOpen) return null;

  const aspectRatio = (height / width) * 100; // Maintain aspect ratio

  // Animation variants for the image only
  const imageVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.4 }, // Image grows into the borders slowly
    },
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      {/* Container for the image and its borders */}
      <div className="w-1/2 max-w-full mx-auto relative">
        {/* Padding container to maintain aspect ratio */}
        <div style={{ paddingTop: `${aspectRatio}%` }}></div>
        {/* Animated image */}
        <motion.div
          className="absolute inset-0"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            src={imageUrl}
            alt="Modal Content"
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        {/* Border decorations */}
        <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-blue-900 -ml-2 -mt-2 rounded-lg"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-blue-900 -mr-2 -mb-2 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ImageModal;
