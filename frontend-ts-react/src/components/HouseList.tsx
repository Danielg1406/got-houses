import React, { useState } from 'react';
import { searchHouses } from '../services/houseService';

const HouseList: React.FC = () => {
    const [query, setQuery] = useState('');
    const [houses, setHouses] = useState<any[]>([]);

    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        if (value) {
            const result = await searchHouses(value);
            setHouses(result);
        } else {
            setHouses([]);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for houses..."
            />
            {query && (
                <ul>
                    {houses.map(house => (
                        <li key={house.url}>
                            <a href={`/houses/${house.url.split('/').pop()}`}>{house.name}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HouseList;
