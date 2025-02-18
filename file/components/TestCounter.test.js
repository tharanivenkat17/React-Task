import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter'; 

describe('Counter', () => {
  test('initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('increments count when the button is clicked', () => {
    render(<Counter />);
    const button = screen.getByText(/add/i); 
    fireEvent.click(button); 
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('increments twice when the button is clicked twice', () => {
    render(<Counter />);
    const button = screen.getByText(/add/i);
    fireEvent.click(button); 
    fireEvent.click(button); 
    expect(screen.getByText('2')).toBeInTheDocument(); 
  });
});