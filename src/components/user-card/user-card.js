import React from 'react';
import { Link } from '@mui/material';
import ShowDetailsButton from '../show-details-button/show-details-button';
import { UserShape } from '../../const';
import { Avatar } from '@mui/material';

const UserCard = (props) => {
  const {user} = props;

  return (
    <li className="user-list__item user-card">
      <Avatar className="user-card__avatar"
        sx={{width: 60, height: 60}}
      >
        {user.name.charAt(0)}
      </Avatar>

      <div className="user-card__info">
        <h3 className="user-card__name">{user.name}</h3>
        <p className="user-card__username">&#64;{user.username}</p>
        <Link className="user-card__website" href={user.website} underline="hover">{user.website}</Link>
      </div>

      <ShowDetailsButton id={user.id} />
    </li>
  );
};

UserCard.propTypes = {
  user: UserShape,
}

export default UserCard;
