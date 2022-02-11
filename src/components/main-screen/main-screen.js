import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import UserList from '../user-list/user-list';
import { createAPI } from '../../services/api';
import { ApiRoute } from '../../const';

const api = createAPI();

const MainScreen = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get(ApiRoute.ROOT)
      .then((response) => {
        setError(null);
        setUsers(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error)
      })
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <Header />
        <main className="main container">
          <h1 className="main__title visually-hidden">Users page</h1>
          <section className="main__catalog catalog">
            <h2 className="catalog__title visually-hidden">Users list</h2>
            <UserList users={users} />
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
};

export default MainScreen;
