import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';  // Adjust the path as needed

// Describe the tests for the Counter component
describe('Counter Component', () => {

  test('renders with initial count of 0', () => {
    render(<Counter />);
    console.log(screen.debug());  // Log the rendered HTML to debug
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('increments count when the button is clicked', () => {
    render(<Counter />);
    const button = screen.getByText(/increment/i);
    console.log(screen.debug());  // Log the rendered HTML to debug
    fireEvent.click(button);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
  
  test('increments count twice when the button is clicked twice', () => {
    render(<Counter />);
    const button = screen.getByText(/increment/i);
    console.log(screen.debug());  // Log the rendered HTML to debug
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
