import React from 'react';
import Logo from '../components/ui/Logo';
import Navigation from '../components/Navigation';

export default function Footer() {
  const navigationItems = [
    {
      text: 'home',
      href: '/',
    },
    {
      text: 'collection',
      href: '/collection',
    },
    {
      text: 'about',
      href: '/about',
    },
    {
      text: 'contact',
      href: '/contact',
    },
  ];

  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Logo className="mb-5 w-32" />
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            inventore optio soluta reiciendis fugit eius quasi dolore odit
            ducimus architecto ex tempora consequuntur debitis asperiores
            voluptatum, excepturi expedita hic itaque.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-5">Company</h4>
          <Navigation
            className={'flex-col items-start'}
            navigationItems={navigationItems}
          />
        </div>
        <div>
          <h4 className="text-xl font-medium mb-5">Company</h4>
          <ul>
            <li>+1-000-000-0000</li>
            <li>greatstackdev@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="py-5 text-sm text-center">
        Copyright 2024@ - All Right Reserved.
      </p>
    </footer>
  );
}
