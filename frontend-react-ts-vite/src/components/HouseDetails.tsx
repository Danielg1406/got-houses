import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHouseDetails } from "../services/houseService";
import HouseRegion from "./HouseRegion";
import { SparklesCore } from "./ui/FireSparkles";
import HouseName from "./HouseName";
import HouseMembers from "./HouseMembers";
import InfoTable from "./InfoTable";
import HouseLeadership from "./HouseLeadership.tsx";

const HouseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [house, setHouse] = useState<any>(null);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      const result = await getHouseDetails(Number(id));
      setHouse(result);
    };

    fetchHouseDetails().catch((error) => {
        console.error('Error during fetchHouseDetails call:', error);
    });
  }, [id]);

  if (!house) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-[#181818] flex flex-col justify-center items-center text-slate-50 py-8 overflow-hidden">
      <HouseName name={house.name} word={house.words} />
      <HouseRegion region={house.region} />
      <HouseLeadership currentLord={house.currentLord} heir={house.heir} />
      <HouseMembers swornMembers={house.swornMembers} />
      <InfoTable infoDetails={house} />
      <div className="absolute bottom-0 w-full h-1/2 pointer-events-none z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.4}
          maxSize={1.8}
          particleDensity={15}
          className="w-full h-full"
          particleColor="F85E11"
        />
      </div>
      <div className="z-10 bg-[#181818] w-full flex justify-center pb-8 xl:pt-6">
        <a
          href="/"
          className="px-8 py-2 rounded relative bg-transparent text-neutral-200 text-md md:text-lg lg:text-xl xl:text-2xl font-serif hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-neutral-600"
        >
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <span className="relative z-20">Back to search</span>
        </a>
      </div>
    </div>
  );
};

export default HouseDetails;
