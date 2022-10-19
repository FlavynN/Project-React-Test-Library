import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

test('1) Teste se a página contém as informações sobre a Pokédex; ', () => {
  const historico = createMemoryHistory();
  render(
    <Router history={ historico }>
      <App />
    </Router>,
  );
  const Head = screen.getByRole('heading', { level: 1 });
  expect(Head).toBeInTheDocument();
  const linkProjects = screen.getByRole('link', { name: /About/i });
  userEvent.click(linkProjects);
  const titleHeading = screen.getByRole('heading', { level: 2 });
  expect(titleHeading).toHaveTextContent('About Pokédex');
});

test('2) Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
  const historico = createMemoryHistory();
  render(
    <Router history={ historico }>
      <App />
    </Router>,
  );
  const imag = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  const linkProjects = screen.getByRole('link', { name: /About/i });
  userEvent.click(linkProjects);
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
  expect(img.src).toBe(imag);
});
