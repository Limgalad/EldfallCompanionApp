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

  it('filters spells by school', () => {
    render(<SpellBook onBack={() => {}} />);
    const schoolSelect = screen.getByRole('combobox');
    fireEvent.change(schoolSelect, { target: { value: 'Armamancy' } });
    expect(screen.getByRole('heading', { name: /Armamancy/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /Conjuration/i })).not.toBeInTheDocument();
  });
});
