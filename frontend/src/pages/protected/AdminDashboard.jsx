import {Outlet} from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin dashboard</h1>
      <Outlet />
    </div>
  );
}
