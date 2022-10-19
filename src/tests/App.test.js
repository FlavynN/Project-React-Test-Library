import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

test('1) Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação;', () => {
  const historico = createMemoryHistory();
  render(
    <Router history={ historico }>
      <App />
    </Router>,
  );
  const home = screen.getByRole('link', { name: /Home/ });
  userEvent.click(home);
});

test('2)Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação; ', () => {
  const historico = createMemoryHistory();
  render(
    <Router history={ historico }>
      <App />
    </Router>,
  );
  const about = screen.getByRole('link', { name: /About/ });
  userEvent.click(about);
});

test('3)Teste se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação;', () => {
  const historico = createMemoryHistory();
  render(
    <Router history={ historico }>
      <App />
    </Router>,
  );
  const favorites = screen.getByRole('link', { name: /Favorite Pokémons/ });
  userEvent.click(favorites);
});
