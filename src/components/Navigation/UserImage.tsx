import React, { useState, useEffect } from 'react';
import style from './style.module.scss';

const UserImage = () => {
  type userType = {
    name: string;
    username: string;
    picture: string;
    id: string;
  }[];

  const [user, setUser] = useState<userType>();

  useEffect(() => {
    const URL = 'https://randomuser.me/api/';

    fetch(URL)
      .then((data) => data.json())
      .then(({ results }) => {
        const user = results[0];

        setUser([
          {
            name: `${user.name['first']} ${user.name['last']}`,
            username: user.login['username'],
            picture: user.picture['large'],
            id: user.id['value'],
          },
        ]);
      });
  }, []);

  return (
    <div className={style['image--container']}>
      {user?.map(({ name, username, picture, id }) => (
        <div key={id}>
          <img src={picture} alt="user" className={style['user--image']} />
          <h1 className={style['user--name']}>{name}</h1>
          <p className={`${style['user--desc']} desc`}>{`@${username}`}</p>
        </div>
      ))}
    </div>
  );
};

export default UserImage;
