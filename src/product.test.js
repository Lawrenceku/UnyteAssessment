import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Product from './Product';

describe('Product component', () => {
  test('renders product information correctly', () => {
    // Mock product data
    const product = {
      id: 1,
      name: 'Product Name',
      price: '$100',
      rating: 4,
      image: 'product-image.jpg',
    };

    // Mock onSelectProduct function
    const onSelectProductMock = jest.fn();

    // Render the Product component
    const { getByText, getByAltText, getByRole } = render(
      <Product product={product} onSelectProduct={onSelectProductMock} maximum={false} />
    );

    // Check if product name, price, and rating are rendered
    expect(getByText('Product Name')).toBeInTheDocument();
    expect(getByText('$100')).toBeInTheDocument();
    expect(getByText('⭐⭐⭐⭐4')).toBeInTheDocument();

    // Check if product image is rendered with correct alt text
    const productImage = getByAltText('Product Name');
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', 'product-image.jpg');

    // Click the compare button
    const compareButton = getByRole('button', { name: 'Compare' });
    fireEvent.click(compareButton);

    // Check if onSelectProduct function is called with the correct product when clicking compare button
    expect(onSelectProductMock).toHaveBeenCalledTimes(1);
    expect(onSelectProductMock).toHaveBeenCalledWith(product);

    // Check if compare button changes text to 'Remove Compare' after clicking
    expect(compareButton).toHaveTextContent('Remove Compare');

    // Click the compare button again to remove compare
    fireEvent.click(compareButton);

    // Check if compare button changes text back to 'Compare' after clicking again
    expect(compareButton).toHaveTextContent('Compare');
  });
});
