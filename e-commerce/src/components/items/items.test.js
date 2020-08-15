import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import items from './items';

describe('<items />', () => {
  test('it should mount', () => {
    render(<items />);
    
    const items = screen.getByTestId('items');

    expect(items).toBeInTheDocument();
  });
});