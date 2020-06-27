import React from 'react';
import style from './style.module.scss';

type salesType = {
  cardContent: {
    title: string;
    price: string | number;
    description: string;
  }[];
};

const Sales = ({ cardContent }: salesType) => {
  return (
    <div className={style['sales']}>
      <h1 className={`${style['sales--title']} black`}>
        Your sales / earnings
      </h1>

      <div className={style['cards--container']}>
        {cardContent.map(({ title, price, description }) => {
          return (
            <div className={style['sales--card']}>
              <span className={style['sales--card--title']}>{title}</span>
              <h1 className={style['sales--card--price']}>{`$${price}`}</h1>
              <p className={style['sales--card--desc']}>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sales;
