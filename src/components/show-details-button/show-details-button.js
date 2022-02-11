import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const ShowDetailsButton = (props) => {
  const {id} = props;

  const hrefToUserInfoPage = `/users/${id}`;

  return (
    <div className="user-card__button">
      <Button variant="contained" href={hrefToUserInfoPage}>More details</Button>
    </div>
  );
};

ShowDetailsButton.propTypes = {
  id: PropTypes.number.isRequired,
}

export default ShowDetailsButton;
