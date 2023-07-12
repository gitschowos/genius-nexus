import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders first welcome screen', () => {
  render(<App />);
  const headerElement = screen.getByText(/welcome/i);
  expect(headerElement).toBeInTheDocument();
});
