import React from 'react';
import App from './App';

import { render, cleanup } from '@testing-library/react';
import { afterEach } from 'jest-circus';

afterEach(cleanup);

test('render app', () => {
  const { debug } = render(<App />);
  debug();
});
