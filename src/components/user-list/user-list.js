import React from 'react';
import PropTypes from 'prop-types';
import { UserShape } from '../../const';
import UserCard from '../user-card/user-card';

const UserList = (props) => {
  const {users} = props;

  return (
    <ul className="catalog__list user-list">
      {users.map((user) =>
        <UserCard
          key={`user-${user.id}`}
          user={user}
        />
      )}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(UserShape),
}

export default UserList;
