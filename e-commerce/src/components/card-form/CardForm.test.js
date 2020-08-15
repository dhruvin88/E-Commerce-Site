import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardForm from './CardForm';

describe('<CardForm />', () => {
  test('it should mount', () => {
    render(<CardForm />);
    
    const cardForm = screen.getByTestId('CardForm');

    expect(cardForm).toBeInTheDocument();
  });
});