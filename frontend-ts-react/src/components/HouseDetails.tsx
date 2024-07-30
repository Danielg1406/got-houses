import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHouseDetails } from '../services/houseService';

const HouseDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [house, setHouse] = useState<any>(null);

    useEffect(() => {
        const fetchHouseDetails = async () => {
            try {
                const result = await getHouseDetails(Number(id));
                setHouse(result);
            } catch (error) {
                console.error('Error fetching house details:', error);
            }
        };

        fetchHouseDetails().catch((error) => {
            console.error('Error during fetchHouseDetails call:', error);
        });
    }, [id]);

    if (!house) return <div>Loading...</div>;

    return (
        <div>
            <h1>{house.name}</h1>
            <p><strong>Region:</strong> {house.region}</p>
            <p><strong>Coat of Arms:</strong> {house.coatOfArms}</p>
            <p><strong>Words:</strong> {house.words}</p>
            <p><strong>Titles:</strong> {house.titles.join(', ')}</p>
            <p><strong>Seats:</strong> {house.seats.join(', ')}</p>
            <p><strong>Current lord:</strong> {house.currentLord}</p>
            <p><strong>Heir:</strong> {house.heir}</p>
            <p><strong>Overlord:</strong> {house.overlord}</p>
            <p><strong>Founded:</strong> {house.founded}</p>
            <p><strong>Founder:</strong> {house.founder}</p>
            <p><strong>Year of die:</strong> {house.diedOut}</p>
            <p><strong>Ancestral Weapons:</strong> {house.ancestralWeapons.join(', ')}</p>
            <p><strong>Cadet Branches:</strong> {house.cadetBranches.join(', ')}</p>
            <p><strong>Sworn Members:</strong> {house.swornMembers.join(', ')}</p>
        </div>
    );
};

export default HouseDetails;
