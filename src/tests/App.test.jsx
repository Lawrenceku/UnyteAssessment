import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from '../App';

// Mock the SearchBar component
jest.mock('../components/SearchBar', () => () => <div data-testid="search-bar">Mocked SearchBar</div>);

test('renders App component with SearchBar', () => {
  // Render the App component
  const { getByTestId } = render(<App />);

  // Find the SearchBar component within the rendered App component
  const searchBarElement = getByTestId('search-bar');

  // Assert that the SearchBar component is present
  expect(searchBarElement).toBeInTheDocument();
});
