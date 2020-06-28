import React from 'react';
import style from './style.module.scss';

interface listType {
  title: string;
  data: {
    icon?: JSX.Element;
    title: string;
    quantity?: string | number;
  }[];
}

const List = (props: listType) => {
  return (
    <div>
      <h2 className={style['list--title']}>{props.title}</h2>

      <ul className={style['list']}>
        {props.data.map(({ icon, title, quantity }, i) => (
          <li className={style['list--item']} key={i}>
            <span className={style['list--leftSide']}>
              {icon ? (
                <span className={style['list--icon']}>{icon}</span>
              ) : null}
              <p className={style['list--name']}>{title}</p>
            </span>

            <span className={style['list--rightSide']}>
              <p className={style['list--quantity']}>{quantity}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
