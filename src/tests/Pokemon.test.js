import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import renderWithRouter from './renderWithRouter';
import App from '../App';

test('1) O nome correto do pokémon deve ser mostrado na tela;', () => {
  renderWithRouter(<App />);
  expect(screen.getByTestId('pokemon-name')).toHaveTextContent(/Pikachu/i);
});
test('2) O tipo correto do pokémon deve ser mostrado na tela', () => {
  renderWithRouter(<App />);
  expect(screen.getByTestId('pokemon-type')).toHaveTextContent(/Electric/i);
});
test('3) O peso médio do pokémon deve ser exibido com um texto no formato Average weight: <value> <measurementUnit>; onde <value> e <measurementUnit> são, respectivamente, o peso médio do pokémon e sua unidade de medida', () => {
  renderWithRouter(<App />);
  expect(screen.getByTestId('pokemon-weight')).toHaveTextContent(/Average weight: 6.0 kg/i);
});
test('4) A imagem do pokémon deve ser exibida. Ela deve conter um atributo src com a URL da imagem e um atributo alt com o texto <name> sprite, onde <name> é o nome do pokémon', () => {
  renderWithRouter(<App />);
  const imag = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
  const alt = 'Pikachu sprite';
  const img = screen.getByRole('img');
  expect(img.src).toBe(imag);
  expect(img.alt).toBe(alt);
});

test('5) Teste se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon', () => {
  const historico = createMemoryHistory();
  render(
    <Router history={ historico }>
      <App />
    </Router>,
  );
  const linkProjects = screen.getByRole('link', { name: /More details/i });
  userEvent.click(linkProjects);
  const { location: { pathname } } = historico;
  expect(pathname).toBe('/pokemons/25');
});

test('6) O ícone deve ser uma imagem com o atributo src contendo o caminho /star-icon.svg', () => {
  renderWithRouter(<App />);
  const linkProjects = screen.getByRole('link', { name: /More Details/i });
  userEvent.click(linkProjects);
  const checked = screen.getByRole('checkbox', { id: 'favorite' });
  userEvent.click(checked);
  const markedFav = screen.getByAltText(/Pikachu is marked as favorite/i);
  expect(markedFav.src).toBe('http://localhost/star-icon.svg');
});
