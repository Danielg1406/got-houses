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

    fetchData();
  }, [currentLord, heir]);

  const lordName = lord?.name || "N/A";
  const heirName = heirCharacter?.name || "N/A";
  const lordImage = currentLord ? "/lord.webp" : "/unknown.webp";
  const heirImage = heir ? "/brand.webp" : "/unknown.webp";

  return (
    <div className="flex flex-col justify-center items-center relative w-full bg-[#181818] bg-no-repeat bg-center bg-cover pt-10 pb-20 px-8 z-2">
      <img
        src="/throne.webp"
        alt="image of the iron throne from game of thrones"
        className="absolute mx-auto align-center z-2 opacity-20"
      />
      <div className="flex flex-col z-10">
        <h2 className="max-w-7xl text-xl text-left md:text-5xl text-neutral-200 font-got mb-8">
          Leadership
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <img
              src={lordImage}
              alt={lordName}
              className="w-24 h-24 rounded-full border-2 border-neutral-700 mb-2"
            />
            <p className="text-lg font-serif text-neutral-200">{lordName}</p>
            <p className="text-md font-serif text-[#D4AF37]">Current Lord</p>
          </div>
          <div className="w-px h-20 bg-neutral-200 my-4"></div>
          <div className="flex flex-col items-center">
            <img
              src={heirImage}
              alt={heirName}
              className="w-24 h-24 rounded-full border-2 border-neutral-700 mb-2"
            />
            <p className="text-lg font-serif text-neutral-200">{heirName}</p>
            <p className="text-md font-serif text-neutral-400">Heir</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseLeadership;
