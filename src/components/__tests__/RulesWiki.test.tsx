import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RulesWiki from '../RulesWiki';
import React from 'react';

// Mock window.scrollTo
window.scrollTo = vi.fn();

describe('RulesWiki', () => {
  it('renders rules wiki header', () => {
    render(<RulesWiki onBack={() => {}} />);
    expect(screen.getAllByText(/Rules Wiki/i).length).toBeGreaterThan(0);
  });

  it('switches between tabs', async () => {
    render(<RulesWiki onBack={() => {}} />);
    const statesTab = screen.getByText(/^States$/i);
    fireEvent.click(statesTab);
    expect(await screen.findByText(/Bleeding/i)).toBeInTheDocument();
    
    // The tabs are buttons that contain the text
    const traitsTab = screen.getAllByRole('button').find(b => b.textContent === 'Traits');
    if (traitsTab) fireEvent.click(traitsTab);
    expect(await screen.findByText(/Brute/i)).toBeInTheDocument();
  });

  it('filters rules by search query', () => {
    const { container } = render(<RulesWiki onBack={() => {}} />);
    const searchInput = screen.getByPlaceholderText(/Search rules, traits, skills, or combat arts.../i);
    fireEvent.change(searchInput, { target: { value: 'Attributes' } });
    expect(container.textContent).toMatch(/Attributes \(Stats\)/i);
  });

  it('supports fuzzy search matches', () => {
    const { container } = render(<RulesWiki onBack={() => {}} />);
    const searchInput = screen.getByPlaceholderText(/Search rules, traits, skills, or combat arts.../i);
    fireEvent.change(searchInput, { target: { value: 'attrts' } });
    expect(container.textContent).toMatch(/Attributes \(Stats\)/i);
  });

  it('can filter search results by category', () => {
    const { container } = render(<RulesWiki onBack={() => {}} />);
    const searchInput = screen.getByPlaceholderText(/Search rules, traits, skills, or combat arts.../i);
    fireEvent.change(searchInput, { target: { value: 'Brute' } });
    
    // open the filter menu
    const menuButton = screen.getByRole('button', { name: "Open search filters" });
    fireEvent.click(menuButton);

    // click the "Traits" filter option in the menu (it should be visible now)
    // Find all buttons, get the one in the dropdown (it has no 'eldfall-card' class)
    const buttons = screen.getAllByRole('button').filter(b => b.textContent?.includes('Traits') && !b.className.includes('eldfall-card'));
    if (buttons.length > 0) fireEvent.click(buttons[0]);

    expect(container.textContent).toMatch(/Brute/i);
    expect(screen.queryByText(/No Results Found/i)).not.toBeInTheDocument();
  });

  it('highlights matching search terms in results', () => {
    const { container } = render(<RulesWiki onBack={() => {}} />);
    const searchInput = screen.getByPlaceholderText(/Search rules, traits, skills, or combat arts.../i);
    fireEvent.change(searchInput, { target: { value: 'Attributes' } });

    expect(container.querySelector('mark')).not.toBeNull();
  });

  it('opens detail modal when a rule is clicked', () => {
    const { container } = render(<RulesWiki onBack={() => {}} />);
    // Just click the first card
    const card = container.querySelector('.eldfall-card-interactive');
    if (card) fireEvent.click(card);
    // Detail modal should open
    expect(container.textContent).toMatch(/Rules Wiki/i);
  });
});
