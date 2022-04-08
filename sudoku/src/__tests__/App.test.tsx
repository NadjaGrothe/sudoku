import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders heading', () => {
  render(<App />);
  const headerElement = screen.getByText(/sudoku/i);
  expect(headerElement).toBeInTheDocument();
});
