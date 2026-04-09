import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MissionOverview from '../MissionOverview';
import React from 'react';

// Mock window.scrollTo
window.scrollTo = vi.fn();

describe('MissionOverview', () => {
  it('renders mission cards', () => {
    render(<MissionOverview onBack={() => {}} />);
    expect(screen.getByText(/Competitive Quests/i)).toBeInTheDocument();
    expect(screen.getByText(/Open Hostilities/i)).toBeInTheDocument();
  });

  it('opens mission detail when a card is clicked', () => {
    render(<MissionOverview onBack={() => {}} />);
    const missionCard = screen.getByText(/Open Hostilities/i);
    fireEvent.click(missionCard);
    expect(screen.getByText(/Back to Quests/i)).toBeInTheDocument();
    expect(screen.getByText(/Standard Deployment: 8" Deployment Zones./i)).toBeInTheDocument();
  });

  it('opens quest schemes modal', () => {
    render(<MissionOverview onBack={() => {}} />);
    const schemesButton = screen.getByText(/Quest Schemes/i);
    fireEvent.click(schemesButton);
    expect(screen.getAllByText(/Quest Schemes/i).length).toBeGreaterThan(1);
    expect(screen.getByText(/Neutral/i)).toBeInTheDocument();
  });

  it('opens creatures database modal', () => {
    render(<MissionOverview onBack={() => {}} />);
    const creaturesButton = screen.getByText(/Creatures Database/i);
    fireEvent.click(creaturesButton);
    expect(screen.getAllByText(/Creatures Database/i).length).toBeGreaterThan(1);
    expect(screen.getByRole('heading', { name: /^Gargoyle$/i })).toBeInTheDocument();
  });
});
