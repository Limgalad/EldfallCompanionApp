import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SpellBook from '../SpellBook';
import React from 'react';

describe('SpellBook', () => {
  it('renders spell book header', () => {
    render(<SpellBook onBack={() => {}} />);
    expect(screen.getByText(/Spell Book/i)).toBeInTheDocument();
  });

  it('filters spells by search query', () => {
    render(<SpellBook onBack={() => {}} />);
    const searchInput = screen.getByPlaceholderText(/Search spells by name, effect, or element.../i);
    fireEvent.change(searchInput, { target: { value: 'Ethereal Blades' } });
    expect(screen.getByText(/Ethereal Blades/i)).toBeInTheDocument();
    expect(screen.queryByText(/Summon Gargoyle/i)).not.toBeInTheDocument();
  });

  it('supports fuzzy spell search queries', () => {
    render(<SpellBook onBack={() => {}} />);
    const searchInput = screen.getByPlaceholderText(/Search spells by name, effect, or element.../i);
    fireEvent.change(searchInput, { target: { value: 'ethrl blds' } });
    expect(screen.getByText(/Ethereal Blades/i)).toBeInTheDocument();
  });

  it('shows spell search suggestions', () => {
    render(<SpellBook onBack={() => {}} />);
    const searchInput = screen.getByPlaceholderText(/Search spells by name, effect, or element.../i);
    fireEvent.change(searchInput, { target: { value: 'Ethereal' } });
    expect(screen.getByText(/Suggestions/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Ethereal Blades/i).length).toBeGreaterThan(0);
  });

  it('filters spells by school', () => {
    render(<SpellBook onBack={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: /^Armamancy$/i }));
    expect(screen.getByRole('heading', { name: /Armamancy/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /Conjuration/i })).not.toBeInTheDocument();
  });

  it('searches all schools and navigates to the exact spell', () => {
    render(<SpellBook onBack={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: /^Armamancy$/i }));

    const searchInput = screen.getByPlaceholderText(/Search spells by name, effect, or element.../i);
    fireEvent.change(searchInput, { target: { value: 'Summon Gargoyle' } });

    fireEvent.click(screen.getByRole('button', { name: /Conjuration.*Summon Gargoyle/i }));

    expect(screen.getByRole('heading', { name: /Conjuration/i })).toBeInTheDocument();
    expect(screen.getByText(/Summon Gargoyle/i)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /Armamancy/i })).not.toBeInTheDocument();
  });
});
