import { render } from '@testing-library/react';
import SenmoLogo from './senmo-logo';

describe('SenmoLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SenmoLogo />);
    expect(baseElement).toBeTruthy();
  });
});
