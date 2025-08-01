import { render, screen } from '@pwa/test-utils';
import { Welcome } from './Welcome';
import '@testing-library/jest-dom';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<Welcome />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/'
    );
  });
});
