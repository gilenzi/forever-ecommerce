import {NavLink} from 'react-router-dom';
import {FaChevronLeft} from 'react-icons/fa';

export default function SideNavigation({
  navigationItems,
  className,
  onSideNavClose,
}) {
  const navItems = navigationItems?.map(({text, href}) => (
    <li key={text} className="w-full">
      <NavLink
        className={({isActive}) =>
          `uppercase py-2 pl-6 border-b cursor-pointer w-full block ${
            isActive ? 'bg-gray-700 text-white' : 'border-gray-300 '
          }`
        }
        to={href}
        onClick={onSideNavClose}
      >
        <span>{text}</span>
      </NavLink>
    </li>
  ));
  return (
    <>
      <button
        onClick={onSideNavClose}
        className="flex w-full cursor-pointer gap-3 py-2 items-center border-b border-gray-300 text-black"
      >
        <FaChevronLeft />
        <span className="text-gray-500">Back</span>
      </button>
      <ul className={`flex flex-col text-sm w-full gray-700 ${className}`}>
        {navItems}
      </ul>
    </>
  );
}
