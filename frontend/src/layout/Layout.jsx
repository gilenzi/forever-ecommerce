import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Header />
      <main className="border-t border-gray-300 pt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
