import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ColorChange from './ColorChange';

describe('Change color', () => {
    test('color should be red', () => {
        render(<ColorChange />);
        const element = screen.getByTestId('color-box');
        const style = window.getComputedStyle(element);
        expect(style.backgroundColor).toBe('red');
    });

    test('color should be wheat', () => {
        render(<ColorChange />);
        const button = screen.getByText(/color change/i);
        fireEvent.click(button);
        const element = screen.getByTestId('color-box');
        const style = window.getComputedStyle(element);
        expect(style.backgroundColor).toBe('wheat');
    });

    test('color should be lightblue', () => {
        render(<ColorChange />);
        const button = screen.getByText(/color change/i);
        fireEvent.click(button);
        fireEvent.click(button);
        const element = screen.getByTestId('color-box');
        const style = window.getComputedStyle(element);
        expect(style.backgroundColor).toBe('lightblue');
    });

    test('color should be lightcoral', () => {
        render(<ColorChange />);
        const button = screen.getByText(/color change/i);
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);
        const element = screen.getByTestId('color-box');
        const style = window.getComputedStyle(element);
        expect(style.backgroundColor).toBe('lightcoral');
    });

    test('color should be purple', () => {
        render(<ColorChange />);
        const button = screen.getByText(/color change/i);
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);
        const element = screen.getByTestId('color-box');
        const style = window.getComputedStyle(element);
        expect(style.backgroundColor).toBe('purple');
    });
});
