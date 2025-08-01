import '@mantine/core/styles.css';

import { Router } from '@pwa/router';
import { theme } from '@pwa/theme';
import { MantineProvider } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router></Router>
    </MantineProvider>
  );
}
