import { useEffect, useState } from "react";
import Country from "./country";



const Countries = () => {
    const [countries , setCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
        

    }, [])
   
    return (
        <div>
            <p>
                Length of Countries : {countries.length}
            </p>
            
           
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {countries.map(country => <Country key={country.cca3}uh  country ={country}></Country>)}
            </div>
        </div>
    );
};

export default Countries;