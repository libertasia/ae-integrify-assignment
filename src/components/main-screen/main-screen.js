import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import UsersList from '../users-list/users-list';
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
        <main>
          <h1 className="visually-hidden">Users page</h1>
          <section>
            <h2 className="visually-hidden">Users list</h2>
            <UsersList users={users} />
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
};

export default MainScreen;
