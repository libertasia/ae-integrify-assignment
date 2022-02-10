import React from 'react';
import { Link } from 'react-router-dom';
import ShowDetailsButton from '../show-details-button/show-details-button';
import { UserShape } from '../../const';

const UserCard = (props) => {
  const {user} = props;

  return (
    <li>
      <div>
        <span>{user.name.charAt(0)}</span>
      </div>

      <div>
        <p>{user.name}</p>
        <p>`&#64;{user.username}`</p>
        <Link to={user.website}>{user.website}</Link>
      </div>

      <ShowDetailsButton id={user.id} />
    </li>
  );
};

UserCard.propTypes = {
  user: UserShape,
}

export default UserCard;
