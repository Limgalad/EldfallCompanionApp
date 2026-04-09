import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RulesWiki from '../RulesWiki';
import React from 'react';

// Mock window.scrollTo
window.scrollTo = vi.fn();

describe('RulesWiki', () => {
  it('renders rules wiki header', () => {
    render(<RulesWiki onBack={() => {}} />);
    expect(screen.getByText(/Rules Wiki/i)).toBeInTheDocument();
  });

  it('switches between tabs', async () => {
    render(<RulesWiki onBack={() => {}} />);
    const statesTab = screen.getByText(/States/i);
    fireEvent.click(statesTab);
    expect(await screen.findByText(/Bleeding/i)).toBeInTheDocument();
    
    const traitsTab = screen.getByRole('button', { name: /Traits/i });
    fireEvent.click(traitsTab);
    expect(await screen.findByText(/Brute/i)).toBeInTheDocument();
  });

  it('filters rules by search query', () => {
    render(<RulesWiki onBack={() => {}} />);
    const searchInput = screen.getByPlaceholderText(/Search rules, traits, skills, or combat arts.../i);
    fireEvent.change(searchInput, { target: { value: 'Attributes' } });
    expect(screen.getByText(/Attributes \(Stats\)/i)).toBeInTheDocument();
  });

  it('opens detail modal when a rule is clicked', () => {
    render(<RulesWiki onBack={() => {}} />);
    const ruleCard = screen.getByText(/Attributes \(Stats\)/i);
    fireEvent.click(ruleCard);
    expect(screen.getAllByText(/Attributes \(Stats\)/i).length).toBeGreaterThan(1);
    expect(screen.getByText(/STA \(Stamina\)/i)).toBeInTheDocument();
  });
});
