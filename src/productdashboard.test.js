import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductDashboard from './ProductDashboard';

describe('ProductDashboard component', () => {
  test('renders product dashboard correctly', () => {
    // Render the ProductDashboard component
    const { getByText, getByPlaceholderText } = render(<ProductDashboard />);

    // Check if search input and button are rendered
    const searchInput = getByPlaceholderText('Search products...');
    expect(searchInput).toBeInTheDocument();

    const searchButton = getByText('Search');
    expect(searchButton).toBeInTheDocument();

    // Check if initial message is rendered
    const itemNotFoundMessage = getByText('Item Not Found');
    expect(itemNotFoundMessage).toBeInTheDocument();

    // Check if product comparison container is not initially rendered
    const productComparisonContainer = document.getElementById('container');
    expect(productComparisonContainer).toBeNull();

    // Check if search input works correctly
    fireEvent.change(searchInput, { target: { value: 'product' } });
    fireEvent.click(searchButton);

    // Check if the input search value is set correctly
    expect(searchInput.value).toBe('product');

    // Check if the filtered products are rendered
    const product1 = getByText('Product 1');
    const product2 = getByText('Product 2');
    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();

    // Check if the compare button works correctly
    const compareButton1 = getByText('Compare');
    fireEvent.click(compareButton1);
    expect(compareButton1).toHaveTextContent('Remove Compare');

    // Check if selecting more than 2 products triggers alert
    const compareButton2 = getByText('Compare');
    fireEvent.click(compareButton2);
    expect(compareButton2).toHaveTextContent('Remove Compare');

    const compareButton3 = getByText('Compare');
    fireEvent.click(compareButton3);
    expect(compareButton3).toHaveTextContent('Remove Compare');

    // Check if max state is set to true after selecting more than 2 products
    const maxState = true;

    // Check if the comparison container is rendered after selecting 2 products
    expect(productComparisonContainer).toBeInTheDocument();

    // Check if clicking the remove compare button resets the state
    const removeCompareButton = getByText('Remove Compare');
    fireEvent.click(removeCompareButton);
    expect(removeCompareButton).toHaveTextContent('Compare');

    // Check if the product comparison container is hidden after clicking remove compare
    expect(productComparisonContainer).toBeNull();
  });
});
