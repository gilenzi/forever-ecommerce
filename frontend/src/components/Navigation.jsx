import {NavLink} from 'react-router-dom';

export default function Navigation({navigationItems, className}) {
  const navItems = navigationItems?.map(({text, href}) => (
    <li key={text}>
      <NavLink className="uppercase flex flex-col items-center gap-1" to={href}>
        {({isActive}) => (
          <>
            <span>{text}</span>
            {isActive && (
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
            )}
          </>
        )}
      </NavLink>
    </li>
  ));
  return (
    <ul className={`flex gap-5 text-sm gray-700 ${className}`}>{navItems}</ul>
  );
}
