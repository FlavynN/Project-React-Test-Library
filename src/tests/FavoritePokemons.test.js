import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('1) Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha pokémons favoritos', () => {
  renderWithRouter(<App />);
  const home = screen.getByRole('link', { name: /Favorite Pokémons/ });
  userEvent.click(home);
  expect(screen.getByText('No favorite pokemon found')).toBeInTheDocument();
});
