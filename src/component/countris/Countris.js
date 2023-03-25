import React, { useEffect, useState } from 'react';
import Country from '../cingelcountry/Country';
import"./countris.css"

const Countris = () => {
    const url = 'https://restcountries.com/v3.1/all'
    const[countris,setCountrys]=useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountrys(data))
    },[])
    return (
        <div>
            <h2>hello Countrys:{countris.length}</h2>
            <div className='countrys-container'>
            {countris.map(country=><Country country = {country} kye={country.cca3}></Country>)}
            
            </div>
             </div>
    );
};


export default Countris;