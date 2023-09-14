/* eslint-disable react/prop-types */

import { useState } from 'react';
import './country.css'
const Country = ({country,handleVisitedCountries}) => {
    const {name,flags,population,area,cca2:code}= country;
    // console.log(country);

    const [isVisited,setIsVisited] = useState(false);

    function handleButton(){
        setIsVisited(!isVisited);
    }

    return (
        <div className={`country ${isVisited && "visited"}`}>
            <h4 style={{color: isVisited && 'green',textAlign: isVisited && 'center'}}>Name: {name.common}</h4>
            <img className='flag' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {code}</p>
            <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={handleButton}>{isVisited? 'visited': 'going'}</button>
            {isVisited? 'ghura sesh': 'ghurte jabo'}
        </div>
    );
};

export default Country;