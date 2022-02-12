import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Breadcrumbs, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Avatar } from '@mui/material';
import { createAPI } from '../../services/api';
import { AppRoute } from '../../const';

const api = createAPI();

const UserScreen = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState([]);

  const id = parseInt(useParams().id, 10);

  useEffect(() => {
    api.get(`/users/${id}`)
      .then((response) => {
        setError(null);
        setUser(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error)
      })
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <Header />
        <main className="main container">
          <h1 className="main__title visually-hidden">User info page</h1>
          <section className="user-info">
            <h2 className="user-info__title visually-hidden">Detailed user info</h2>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                href={AppRoute.ROOT}
              >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Home
              </Link>
              <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
              >
                <PersonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                User
              </Typography>
            </Breadcrumbs>
            <article className="user-info__card">
              <h3 className="user-info__card-title visually-hidden">User info card</h3>
              <div className="user-info__avatar">
                <Avatar className="user-info__img"
                    sx={{width: 80, height: 80}}
                >
                  {user.name.charAt(0)}
                </Avatar>
              </div>
              <div className="user-info__details">
                <p className="user-info__details-item">
                  <strong className="user-info__details-name">name:</strong>
                  <span className="user-info__details-value">{user.name}</span>
                </p>
                <p className="user-info__details-item">
                  <strong className="user-info__details-name">username:</strong>
                  <span className="user-info__details-value">&#64;{user.username}</span>
                </p>
                <p className="user-info__details-item">
                  <strong className="user-info__details-name">company:</strong>
                  <span className="user-info__details-value">{user.company.name}</span>
                </p>
                <p className="user-info__details-item">
                  <strong className="user-info__details-name">email:</strong>
                  <Link className="user-info__details-value" href={`mailto:${user.email}`} underline="hover">{user.email}</Link>
                </p>
                <p className="user-info__details-item">
                  <strong className="user-info__details-name">phone:</strong>
                  <Link className="user-info__details-value" href={`tel:${user.phone}`} underline="hover">{user.phone}</Link>
                </p>
                <p className="user-info__details-item">
                  <strong className="user-info__details-name">website:</strong>
                  <Link className="user-info__details-value" href={`https://www.${user.website}`} underline="hover">{user.website}</Link>
                </p>
                <div className="user-info__details-item">
                  <p className="user-info__details-name"><strong>address:</strong></p>
                  <div className="user-info__details-value">
                    <p>street: {user.address.street}</p>
                    <p>suite: {user.address.suite}</p>
                    <p>city: {user.address.city}</p>
                    <p>zipcode: {user.address.zipcode}</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
};

export default UserScreen;
