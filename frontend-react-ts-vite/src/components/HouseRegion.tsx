import React from "react";
import { motion } from "framer-motion";

interface HouseRegionProps {
  region: string;
}

const HouseRegion: React.FC<HouseRegionProps> = ({ region }) => {
  return (
    <div className="flex flex-col justify-center pb-8 xl:pb-11 px-6 md:px-10 lg:px-20 xl:px-32 w-full bg-[#181818] z-10">
      <div className="flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-neutral-200 font-got mb-8"
        >
          Region
        </motion.h2>
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          src="/got-map.webp"
          alt="map of game of thrones showing all the regions"
          className="z-10 mb-4 w-full md:w-11/12 lg:w-10/12 xl:w-9/12 self-center rounded border border-neutral-700 shadow-[0_5px_60px_5px_rgba(240,240,240,0.1)]"
        />
        <p className="font-serif text-lg md:text-xl lg:text-2xl xl:text-3xl text-center text-gray-300">
          {region}
        </p>
      </div>
    </div>
  );
};

export default HouseRegion;
