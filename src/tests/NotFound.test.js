import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Notfound from '../pages/NotFound';

test('1) Teste se a página contém um heading h2 com o texto Page requested not found', () => {
  renderWithRouter(<Notfound />);
  const titleHeading = screen.getByRole('heading', { level: 2 });
  expect(titleHeading).toHaveTextContent('Page requested not found');
});

test('2) Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
  renderWithRouter(<Notfound />);
  const imag = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
  expect(img.src).toBe(imag);
});
