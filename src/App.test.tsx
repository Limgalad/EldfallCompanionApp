import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the main title', () => {
    render(<App />);
    const elements = screen.getAllByText(/ELDFALL CHRONICLES/i);
    expect(elements.length).toBeGreaterThan(0);
  });
});
