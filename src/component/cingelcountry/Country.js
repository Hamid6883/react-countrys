import React from 'react';
import'./Country.css'

const Country = (props) => {
    // dictraccaring
    const {area,population,region,capital,name,flags}  = props.country;
    console.log(props);
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Name : {name.common}</h2>
            <h3>Capital :{capital}</h3>
            <h4>Aria : {area}</h4>
          <h3>Population :{population} </h3>
          <p><small>Region :{region}</small></p>
           
        </div>
    );
};

export default Country;