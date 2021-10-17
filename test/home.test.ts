import { render, screen } from '@testing-library/react';

import App from '../src/pages/index';

describe(`Home Page`, () => {
  it(`should render home page`, () => {
    render(<App />);
  });
});
