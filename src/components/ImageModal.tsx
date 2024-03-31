import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
  width: number;
  height: number;
  title?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  onClose,
  width,
  height,
  title,
}) => {
  if (!isOpen) return null;

  const aspectRatio = (height / width) * 100; // Maintain aspect ratio

  const imageVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="w-1/2 max-w-full mx-auto relative text-center">
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
            alt={title || "Modal Content"}
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ImageModal;
