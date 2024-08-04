import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "./ui/CarouselCards";
import { Card } from "./ui/Card";

interface HouseMembersProps {
  swornMembers: string[];
}

interface Character {
  name: string;
  born: string;
  died: string;
  gender: string;
  url: string;
  titles: string[];
}

const fetchCharacterDetails = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

const HouseMembers: React.FC<HouseMembersProps> = ({ swornMembers }) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const characterData = await Promise.all(
        swornMembers.map((url) => fetchCharacterDetails(url))
      );
      setCharacters(characterData);
    };

    fetchData().catch((error) => {
        console.error('Error during fetchHouseDetails call:', error);
    });
  }, [swornMembers]);

  const cards = characters.map((character, index) => (
    <Card
      key={character.url}
      card={{
        src: "/jon-snow.webp",
        title: character.name,
        category: character.titles.join(", "),
        content: (
          <div className="space-y-2">
            <p className="md:text-lg 2xl:text-xl text-neutral-200">
              <span className="font-got text-md md:text-lg lg:text-xl xl:text-2xl text-neutral-400">Born: </span>
              {character.born || "Unknown"}
            </p>
            <p className="md:text-lg 2xl:text-xl text-neutral-200">
              <span className="font-got text-md md:text-lg lg:text-xl xl:text-2xl text-neutral-400">Died: </span>
              {character.died || "Unknown"}
            </p>
            <p className="md:text-lg 2xl:text-xl text-neutral-200">
              <span className="font-got text-md md:text-lg lg:text-xl xl:text-2xl text-neutral-400">
                Gender:{" "}
              </span>
              {character.gender || "Unknown"}
            </p>
          </div>
        ),
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full px-6 md:px-10 lg:px-20 xl:px-32 bg-[#181818] z-10">
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-neutral-200 font-got">
        Sworn Members
      </h2>
      <Carousel items={cards} />
    </div>
  );
};

export default HouseMembers;
