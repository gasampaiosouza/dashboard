import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faDollarSign,
  faComment,
  faUserFriends,
  faStar,
  faHeart,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

export const firstListContent = [
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

export const secondListContent = [
  {
    title: 'Profile info',
  },
  {
    title: 'Payment methods',
  },
  {
    title: 'Sign out',
    icon: <FontAwesomeIcon icon={faSignOutAlt} />,
  },
];
