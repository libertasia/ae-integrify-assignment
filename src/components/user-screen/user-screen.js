import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const UserScreen = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <h1 className="visually-hidden">User info page</h1>
        <section>
          <h2 className="visually-hidden">Detail user's info</h2>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default UserScreen;
