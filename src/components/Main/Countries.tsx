import React, { useState, useEffect } from 'react';
import style from './style.module.scss';

// import { countries } from './content';

type countryType = {
  name: string;
  flag: string;
};

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const URL = 'https://restcountries.eu/rest/v2/all';

    fetch(URL)
      .then((data) => data.json())
      .then((countries) => setCountries(countries.splice(230)));
  });

  return (
    <aside className={style['countries']}>
      <h1 className={style['countries--title']}>Your top countries</h1>

      {countries.map((country: countryType, i: number) => (
        <div key={i} className={style['countries--item']}>
          <div className={`${style['countries--leftSide']} leftSide`}>
            <span className={style['countries--position']}>{i + 1}</span>
            <span className={style['countries--name']}>{country.name}</span>
          </div>

          <img
            src={country.flag}
            className={style['countries--flag']}
            alt="flag"
          />
        </div>
      ))}
    </aside>
  );
};

export default Countries;
