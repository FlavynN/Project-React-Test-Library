import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('1) Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação;', () => {
  renderWithRouter(<App />);
  const home = screen.getByRole('link', { name: /Home/ });
  userEvent.click(home);
});

test('2)Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação; ', () => {
  renderWithRouter(<App />);
  const about = screen.getByRole('link', { name: /About/ });
  userEvent.click(about);
});

test('3)Teste se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação;', () => {
  renderWithRouter(<App />);
  const favorites = screen.getByRole('link', { name: /Favorite Pokémons/ });
  userEvent.click(favorites);
});
