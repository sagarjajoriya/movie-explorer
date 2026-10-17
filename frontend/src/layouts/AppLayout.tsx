import { Outlet } from 'react-router';
import Header from '../components/Header';

function AppLayout() {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
