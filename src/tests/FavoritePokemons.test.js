import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

test('1) Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha pokémons favoritos', () => {
  const historico = createMemoryHistory();
  render(
    <Router history={ historico }>
      <App />
    </Router>,
  );
  const home = screen.getByRole('link', { name: /Favorite Pokémons/ });
  userEvent.click(home);
  expect(screen.getByText('No favorite pokemon found')).toBeInTheDocument();
});
