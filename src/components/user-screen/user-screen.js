import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import { createAPI } from '../../services/api';

const api = createAPI();

const UserScreen = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState([]);

  const id = parseInt(useParams().id, 10);

  useEffect(() => {
    api.get(`/${id}`)
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
            <h2 className="visually-hidden">Detail user's info</h2>
            <article>
              <h3>User info</h3>
              <p>name: {user.name}</p>
              <p>username: {user.username}</p>
              <p>company: {user.company.name}</p>
              <address>
                <p>email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
                <p>phone: <a href={`tel:${user.phone}`}>{user.phone}</a></p>
                <p>website: <Link to={user.website}>{user.website}</Link></p>
                <p>address:<br />
                  <span>street: {user.address.street}</span>
                  <span>suite: {user.address.suite}</span>
                  <span>city: {user.address.city}</span>
                  <span>zipcode: {user.address.zipcode}</span>
                </p>
              </address>
            </article>
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
};

export default UserScreen;
