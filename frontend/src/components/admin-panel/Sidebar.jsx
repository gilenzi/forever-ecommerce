import {NavLink} from 'react-router-dom';

export default function Sidebar({navItems}) {
  return (
    <aside
      id="admin-sidebar"
      className="min-h-screen border-r-2 border-gray-300 w-[18%]"
    >
      <ul className="pl-5 pt-5">
        {navItems?.map(({text, icon: Icon, iconProps, href}) => (
          <li key={href} className="mb-3">
            <NavLink
              to={href}
              className={({isActive}) =>
                `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l transition-colors ${
                  isActive
                    ? 'bg-gray-200 text-gray-900 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Icon size={30} {...iconProps} />
              <span>{text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
