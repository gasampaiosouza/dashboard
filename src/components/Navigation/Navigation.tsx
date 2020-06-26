import React from 'react';
import style from './style.module.scss';
import UserImage from './UserImage';
// import List from './List';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faDollarSign,
  faComment,
  faUserFriends,
  faStar,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const listContent = [
  {
    title: 'Orders',
    icon: <FontAwesomeIcon icon={faBoxOpen} />,
    quantity: '2',
  },
  {
    title: 'Sales',
    icon: <FontAwesomeIcon icon={faDollarSign} />,
    quantity: '$735.00',
  },
  {
    title: 'Messages',
    icon: <FontAwesomeIcon icon={faComment} />,
    quantity: '1',
  },
  {
    title: 'Followers',
    icon: <FontAwesomeIcon icon={faUserFriends} />,
    quantity: '34',
  },
  { title: 'Reviews', icon: <FontAwesomeIcon icon={faStar} />, quantity: '15' },
  {
    title: 'Favorites',
    icon: <FontAwesomeIcon icon={faHeart} />,
    quantity: '6',
  },
];

export const Navigation: React.FC = () => {
  return (
    <div className={`${style['navigation--container']} box`}>
      <UserImage />
      {/* <List /> */}
      <div className={style['list--container']}>
        <h2 className={style['list--title']}>Dashboard</h2>

        <ul className={style['list']}>
          {listContent.map(({ icon, title, quantity }) => (
            <li className={style['list--item']}>
              <span className={style['list--leftSide']}>
                <span className={style['list--icon']}>{icon}</span>
                <p className={style['list--name']}>{title}</p>
              </span>

              <span className={style['list--rightSide']}>
                <p className={style['list--quantity']}>{quantity}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
