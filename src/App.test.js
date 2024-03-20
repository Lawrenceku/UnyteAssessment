import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component with product dashboard', () => {
  render(<App />);

  // check that the ProductDashboard component is present
  const ProductDashboard = screen.getByTestId('product-dashboard');
  expect(ProductDashboard).toBeInTheDocument();
});

test('renders App component without any additional content', () => {
  render(<App />);

  // check that there is no additional content rendered
  const additionalContentElement = screen.queryByTestId('additional-content');
  expect(additionalContentElement).not.toBeInTheDocument();
});
