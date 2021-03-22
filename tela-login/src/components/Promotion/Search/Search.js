import React, { useEffect, useState } from 'react';
import PromotionCard from '../Card/Card'
import axios from 'axios';

const PromotionSearch = () => {
    const [promotions, setPromotions] = useState([]);
    useEffect(async () => {
        const response = await axios.get('http://localhost:3336/promotions?_embed=comments');
        setPromotions(response.data)
    }, []);

    return (
        <div>
            {promotions.map((promotion) => {
                return <PromotionCard promotion={promotion} />
            })}
        </div>
    );

};

export default PromotionSearch;