/**
 * @jest-environment jsdom
 */
import React from 'react';
import { App } from '../app';
import { render, screen } from '@testing-library/react';
import '@testing-library/dom';


describe('app', () => {
  it('fails', () => {
    render(<App />);

    expect(screen.getByText("It works!"));
  });
});