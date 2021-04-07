import React, { useEffect, useState } from 'react';
import PromotionCard from '../Card/Card'
import PromotionList from '../List/List'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Search.css';

const PromotionSearch = () => {
    const [promotions, setPromotions] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(async () => {
        const params = {}
        if(search){
            params.title_like = search;
        }
        const response = await axios.get('http://localhost:3336/promotions?_embed=comments',{params});
        setPromotions(response.data)
    }, [search]);

    return (
        <div className="promotion-search">
            <header className="promotion-search_header">
                <h1>Promo Show</h1>
                <Link id="/create">Nova Promoção</Link>
            </header>
            <input
                type="search"
                className="promotion-search_input"
                placeholder="Buscar"
                 value={search}
                onChange={(ev) => setSearch(ev.target.value)} 
            />
        <PromotionList  promotions={promotions} loading={!promotions.length}/>

        </div>
    );

};

export default PromotionSearch;