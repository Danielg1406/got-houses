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

    fetchData();
  }, [swornMembers]);

  const cards = characters.map((character, index) => (
    <Card
      key={character.url}
      card={{
        src: "/jon-snow.webp",
        title: character.name,
        category: character.titles.join(", "),
        content: (
          <>
            <p className="text-neutral-200">
              <span className="font-got text-sm text-neutral-400">Born: </span>
              {character.born || "Unknown"}
            </p>
            <p className="text-neutral-200">
              <span className="font-got text-sm text-neutral-400">Died: </span>
              {character.died || "Unknown"}
            </p>
            <p className="text-neutral-200">
              <span className="font-got text-sm text-neutral-400">
                Gender:{" "}
              </span>
              {character.gender || "Unknown"}
            </p>
          </>
        ),
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full px-8 py-10 bg-[#181818] z-10">
      <h2 className="max-w-7xl text-xl md:text-5xl font-bold text-neutral-200 font-got">
        Sworn Members
      </h2>
      <Carousel items={cards} />
    </div>
  );
};

export default HouseMembers;
