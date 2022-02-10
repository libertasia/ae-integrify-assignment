import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import UsersList from '../users-list/users-list';

const MainScreen = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <h1 className="visually-hidden">Users page</h1>
        <section>
          <h2 className="visually-hidden">Users list</h2>
          <UsersList />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default MainScreen;
