import {Outlet} from 'react-router-dom';
import Header from '../components/admin-panel/Header';
import Sidebar from '../components/admin-panel/Sidebar';
import {IoAddCircleOutline} from 'react-icons/io5';
import {CiCircleCheck} from 'react-icons/ci';

export default function AdminLayout() {
  const sidebarItems = [
    {
      text: 'Add Items',
      href: 'admin/add-items',
      icon: IoAddCircleOutline,
    },
    {
      text: 'List Items',
      href: 'admin/list-items',
      icon: CiCircleCheck,
    },
    {
      text: 'Orders',
      href: 'admin/orders',
      icon: CiCircleCheck,
    },
  ];
  return (
    <div className="bg-gray-50 ">
      <Header />
      <div className="flex w-full gap-3 md:gap-10">
        <Sidebar navItems={sidebarItems} />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
