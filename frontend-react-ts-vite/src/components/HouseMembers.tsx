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
            <p className="text-neutral-200">Born: {character.born}</p>
            <p className="text-neutral-200">Died: {character.died}</p>
          </>
        ),
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-got">
        Sworn Members
      </h2>
      <Carousel items={cards} />
    </div>
  );
};

export default HouseMembers;
