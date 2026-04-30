import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MissionOverview from '../MissionOverview';
import React from 'react';

// Mock window.scrollTo
window.scrollTo = vi.fn();

describe('MissionOverview', () => {
  it('renders mission cards', () => {
    render(<MissionOverview onBack={() => {}} />);
    expect(screen.getByText(/Season 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Open Hostilities/i)).toBeInTheDocument();
  });

  it('opens mission detail when a card is clicked', () => {
    render(<MissionOverview onBack={() => {}} />);
    const missionCard = screen.getByText(/Open Hostilities/i);
    fireEvent.click(missionCard);
    expect(screen.getByText(/Quest Detail/i)).toBeInTheDocument();
  });

  it('opens quest schemes modal', () => {
    render(<MissionOverview onBack={() => {}} />);
    const schemesButton = screen.getAllByRole('button').find(b => b.textContent?.includes('Schemes'));
    if (schemesButton) fireEvent.click(schemesButton);
    expect(screen.getAllByText(/Quest Schemes/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Neutral/i)).toBeInTheDocument();
  });

  it('opens creatures database modal', () => {
    render(<MissionOverview onBack={() => {}} />);
    const creaturesButton = screen.getAllByRole('button').find(b => b.textContent?.includes('Creatures'));
    if (creaturesButton) fireEvent.click(creaturesButton);
    expect(screen.getAllByText(/Creatures Database/i).length).toBeGreaterThan(0);
  });
});
