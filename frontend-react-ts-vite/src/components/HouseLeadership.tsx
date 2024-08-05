import React, { useEffect, useState } from "react";
import axios from "axios";

interface HouseLeadershipProps {
  currentLord: string;
  heir: string;
}

interface Character {
  name: string;
  url: string;
}

const fetchCharacterDetails = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

const HouseLeadership: React.FC<HouseLeadershipProps> = ({
  currentLord,
  heir,
}) => {
  const [lord, setLord] = useState<Character | null>(null);
  const [heirCharacter, setHeir] = useState<Character | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (currentLord) {
        const lordData = await fetchCharacterDetails(currentLord);
        setLord(lordData);
      } else {
        setLord({ name: "N/A", url: "" });
      }

      if (heir) {
        const heirData = await fetchCharacterDetails(heir);
        setHeir(heirData);
      } else {
        setHeir({ name: "N/A", url: "" });
      }
    };

    fetchData().catch((error) => {
      console.error("Error during fetchHouseDetails call:", error);
    });
  }, [currentLord, heir]);

  const lordName = lord?.name || "N/A";
  const heirName = heirCharacter?.name || "N/A";
  const lordImage = currentLord ? "/lord.webp" : "/unknown.webp";
  const heirImage = heir ? "/heir.webp" : "/unknown.webp";

  return (
    <div
      className="flex flex-col py-12 xl:py-16 justify-center items-center relative w-full bg-[#181818] bg-no-repeat bg-center bg-cover z-2"
      tabIndex={0}
    >
      <img
        src="/throne.webp"
        alt="The iron throne from game of thrones"
        className="absolute mx-auto align-center z-2 opacity-20"
      />
      <div className="flex flex-col z-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-left text-neutral-200 font-got mb-8">
          Leadership
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <img
              src={lordImage}
              alt={`black and white portrait photo of ${lordName}`}
              className="w-28 h-28 lg:w-40 lg:h-40 rounded-full border-2 border-neutral-700 mb-2"
            />
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-serif text-neutral-200">
              {lordName}
            </p>
            <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-serif text-[#D4AF37]">
              Current Lord
            </p>
          </div>
          <div className="w-px h-20 bg-neutral-200 my-4"></div>
          <div className="flex flex-col items-center">
            <img
              src={heirImage}
              alt={`black and white portrait photo of ${heirName}`}
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-2 border-neutral-700 mb-2"
            />
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-serif text-neutral-200">
              {heirName}
            </p>
            <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-serif text-neutral-400">
              Heir
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseLeadership;
