import React, { useState } from "react";
import { searchHouses } from "../services/houseService";
import { PlaceholdersAndVanishInput } from "./ui/PlaceholdersVanish";

const HouseList: React.FC = () => {
  const [query, setQuery] = useState("");
  const [houses, setHouses] = useState<any[]>([]);

  const handleSearch = async (value: string) => {
    setQuery(value);
    if (value) {
      const result = await searchHouses(value);
      setHouses(result);
    } else {
      setHouses([]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-8">Game of Thrones Houses</h1>
      <PlaceholdersAndVanishInput
        placeholders={["Search...", "Type here..."]}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
      {query && (
        <ul className="mt-4">
          {houses.map((house) => (
            <li key={house.url}>
              <a
                href={`/houses/${house.url.split("/").pop()}`}
                className="text-xl hover:underline"
              >
                {house.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HouseList;
