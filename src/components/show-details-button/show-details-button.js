import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ShowDetailsButton = (props) => {
  const {id} = props;

  const hrefToUserInfoPage = `/${id}`;

  return (
    <React.Fragment>
      <Link to={hrefToUserInfoPage}>More details</Link>
    </React.Fragment>
  );
};

ShowDetailsButton.propTypes = {
  id: PropTypes.number.isRequired,
}

export default ShowDetailsButton;
