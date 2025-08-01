import { Outlet, useLocation } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import HeaderTabs from './header-tabs';
import Navbar from './navbar';
import styles from './ui-shell.module.css';
import Footer from './footer';

export function UiShell() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const { pathname } = useLocation();
  return (
    <AppShell
      header={{ height: 55 }} 
      footer={{ height: 40}}  
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>
        <HeaderTabs />
      </AppShell.Header>   

 
      <AppShell.Main>  
        <Outlet />
      </AppShell.Main> 
       
      <AppShell.Footer>   
       <Footer/>
      </AppShell.Footer>
    </AppShell>
  );
}

export default UiShell;
