import {Outlet} from 'react-router-dom';

export default function ManagerDashboard() {
  return (
    <div>
      <h1>Manager dashboard</h1>
      <Outlet />
    </div>
  );
}
