import {HiMagnifyingGlass} from 'react-icons/hi2';
import {FaRegUser} from 'react-icons/fa';
import {HiOutlineShoppingCart} from 'react-icons/hi2';

import Logo from '../components/ui/Logo';
import Navigation from '../components/Navigation';
import {Link} from 'react-router-dom';
import Hamburger from '../components/ui/Hamburger';
import SideNavigation from '../components/ui/SideNavigation';
import {useState} from 'react';

export default function Header() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
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
    {
      text: 'admin panel',
      href: '/dashboard/admin',
    },
  ];

  const iconsStyle = {
    size: 25,
  };

  return (
    <header className="relative flex items-center justify-between font-medium py-5">
      <Logo styles={{className: 'w-36'}} />
      <Navigation
        className="hidden md:flex"
        navigationItems={navigationItems}
      />
      <div className="flex items-center justify-between gap-4">
        <Link to="/collection">
          <HiMagnifyingGlass {...iconsStyle} />
        </Link>
        <Link to="/login">
          <FaRegUser {...iconsStyle} />
        </Link>
        <Link to="/cart" className="relative">
          <HiOutlineShoppingCart {...iconsStyle} />
          <span className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            0
          </span>
        </Link>
        <Hamburger onClick={() => setSideNavOpen(true)} className="md:hidden" />
      </div>
      {/* {sideNavOpen && ( */}
      <div
        className={`fixed top-0 right-0 bottom-0 px-5 overflow-hidden bg-white transition-all ${
          sideNavOpen ? 'w-full' : 'w-0 hidden'
        }`}
      >
        <SideNavigation
          onSideNavClose={() => setSideNavOpen(false)}
          className=""
          navigationItems={navigationItems}
        />
      </div>
      {/* )} */}
    </header>
  );
}
