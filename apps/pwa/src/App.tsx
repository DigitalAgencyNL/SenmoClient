import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from '@pwa/Router';
import { theme } from '@pwa/theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
