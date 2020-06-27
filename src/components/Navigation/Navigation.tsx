import React from 'react';
import style from './style.module.scss';
import UserImage from './UserImage';
import List from './List';
import { firstListContent, secondListContent } from './content';

export const Navigation: React.FC = () => {
  return (
    <section className={`${style['navigation--container']} box`}>
      <UserImage />

      <div className={style['list--container']}>
        <List title="Dashboard" data={firstListContent} />
        <List title="Account settings" data={secondListContent} />
      </div>
    </section>
  );
};
