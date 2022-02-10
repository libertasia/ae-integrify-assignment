import React from 'react';
import PropTypes from 'prop-types';
import { UserShape } from '../../const';
import UserCard from '../user-card/user-card';

const UsersList = (props) => {
  const {users} = props;

  return (
    <ul>
      {users.map((user) =>
        <UserCard
          key={`user-${user.id}`}
          user={user}
        />
      )}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(UserShape),
}

export default UsersList;
