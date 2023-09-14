import { useEffect, useState } from "react";
import Country from "./Country";
import './Countries.css'

const Countries = () => {

    const [countries,setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data=> setCountries(data))
    },[])

    const handleVisitedCountries = country =>{
       console.log('add this to country ', country);
    //    console.log(visitedCountries.length);
       const newVisitedCountries = [...visitedCountries,country];
       setVisitedCountries(newVisitedCountries);
    //    console.log(visitedCountries.length);
    }

    return (
        <div>

            <h3>Countries</h3>
            <div>
                <h4>Visited countries: {visitedCountries.length}</h4>
                <ul>
                    {visitedCountries.map(CountryElement=>{
                        return <li>{CountryElement.name.common}</li>
                    })}
                </ul>
            </div>
            <div className="country-container">
            {
                countries.map((element)=>{
                    return <Country key={element.cca2} country={element} handleVisitedCountries={handleVisitedCountries}></Country>
                })
            }
            </div>
        </div>
    );
};

export default Countries;