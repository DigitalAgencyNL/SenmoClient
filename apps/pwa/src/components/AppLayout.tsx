import styles from './AppLayout.module.css';
import { Outlet, useLocation } from "react-router-dom";
import { AppShell } from '@mantine/core';
export function AppLayout() {

  const { pathname } = useLocation();  

  return (
    <AppShell
      header={<Header />}
      navbar={pathname.startsWith("/dashboard") ? <Navbar /> : null}
    >
      <Outlet />  
    </AppShell>
  );
}

export default AppLayout;
