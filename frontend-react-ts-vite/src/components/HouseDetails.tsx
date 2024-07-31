import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHouseDetails } from '../services/houseService';

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
        <div>
            <h1>{house.name}</h1>
            <p><strong>Region:</strong> {house.region}</p>
            <p><strong>Coat of Arms:</strong> {house.coatOfArms}</p>
            <p><strong>Words:</strong> {house.words}</p>
            <p><strong>Titles:</strong> {house.titles.join(', ')}</p>
            {/* Add more fields as necessary */}
        </div>
    );
};

export default HouseDetails;
