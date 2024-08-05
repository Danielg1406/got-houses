import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconArrowLeft } from "@tabler/icons-react";

const BackButton: React.FC = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-4 left-4 md:top-8 md:left-8 xl:top-10 xl:left-10 z-50"
    >
      <a
        href="/"
        className="flex items-center justify-center w-10 h-10 bg-transparent mix-blend-hue border border-neutral-700 rounded-full"
        aria-label="Back to search"
      >
        <IconArrowLeft size={24} stroke={1} className="text-neutral-200" />
      </a>
    </motion.div>
  );
};

export default BackButton;
