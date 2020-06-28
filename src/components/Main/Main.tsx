import React from 'react';
import style from './style.module.scss';

import Sales from './Sales';
import Countries from './Countries';
import { content } from './content';

export const Main: React.FC = () => {
  return (
    <section className={`${style['main--container']} box`}>
      <Sales cardContent={content} />
      <Countries />
    </section>
  );
};
