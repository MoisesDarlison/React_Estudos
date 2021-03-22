import React, { useEffect, useState } from 'react';
import PromotionCard from 'components/Promotion/Card/Card'
import axios from 'axios';




const PagesPromotionSearch = () => {
    const [promotions, setPromotions] = useState([]);
    useEffect(async () => {
        const response = await axios.get('http://localhost:3336/promotions?_embed=comments');
        setPromotions(response.data)
    }, []);

    return (
        <div style={{
            maxWidth: 600,
            margin: '30px auto',
        }}>
            {promotions.map((promotion) => {
                return <PromotionCard promotion={promotion} />
            })}
           
        </div>
    );
}
export default PagesPromotionSearch;