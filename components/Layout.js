import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import '@/styles/globals.css';

const Layout = ({ children }) => {
  return (
    <div className='content'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
