import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import item from './item';

describe('<item />', () => {
  test('it should mount', () => {
    render(<item />);
    
    const item = screen.getByTestId('item');

    expect(item).toBeInTheDocument();
  });
});