import { ColorSchemeToggle } from '@pwa/components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '@pwa/components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
