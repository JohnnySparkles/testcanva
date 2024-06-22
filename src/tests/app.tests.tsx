import React from 'react';
import { App } from '../app';
import { render } from '@testing-library/react';
import '@testing-library/dom';


describe('app', () => {
  it('fails', () => {
    render(<App />);
  });
});