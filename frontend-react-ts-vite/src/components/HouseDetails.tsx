import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHouseDetails } from "../services/houseService";

const HouseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [house, setHouse] = useState<any>(null);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      const result = await getHouseDetails(Number(id));
      setHouse(result);
    };

    fetchHouseDetails();
  }, [id]);

  if (!house) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center text-black p-8">
      <h1 className="text-4xl font-bold mb-4">{house.name}</h1>
      <p className="mb-2">
        <strong>Region:</strong> {house.region}
      </p>
      <p className="mb-2">
        <strong>Coat of Arms:</strong> {house.coatOfArms}
      </p>
      <p className="mb-2">
        <strong>Words:</strong> {house.words}
      </p>
      <p className="mb-2">
        <strong>Titles:</strong> {house.titles.join(", ")}
      </p>
      {/* Add more fields as necessary */}
      <a href="/" className="mt-8 text-blue-500 hover:underline">
        Back to search
      </a>
    </div>
  );
};

export default HouseDetails;
