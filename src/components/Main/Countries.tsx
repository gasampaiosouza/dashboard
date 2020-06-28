import React from 'react';
import style from './style.module.scss';

import { countries } from './content';

type countryType = {
  name: string;
  flag: string;
};

const Countries = () => {
  return (
    <aside className={style['countries']}>
      <h1 className={style['countries--title']}>Your top countries</h1>

      {countries.map((country: countryType, i: number) => (
        <div key={i} className={style['countries--item']}>
          <img
            src={require(`../../img/${country.flag}.png`)}
            className={style['countries--flag']}
            alt="flag"
          />
          <span className={style['countries--name']}>{country.name}</span>
        </div>
      ))}
    </aside>
  );
};

export default Countries;
