import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

test('1) Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);
  const titleHeading = screen.getByRole('heading', { level: 2 });
  expect(titleHeading).toHaveTextContent('Encountered pokémons');
});

test('2) Teste se é exibido o próximo pokémon da lista quando o botão Próximo pokémon é clicado', () => {
  renderWithRouter(<App />);
  const typeButton = screen.getByTestId('next-pokemon');
  userEvent.click(typeButton);
  const secondPoke = screen.getByText(/Charmander/i);
  expect(secondPoke).toBeInTheDocument();
});

test('3) Teste se é mostrado apenas um pokémon por vez', () => {
  renderWithRouter(<App />);
  const typeButton = screen.getAllByTestId('pokemon-name');
  expect(typeButton.length).toEqual(1);
});

test('4) Teste se a Pokédex tem os botões de filtro', () => {
  renderWithRouter(<App />);
  const typeButton = screen.getAllByTestId('pokemon-type-button');
  expect(typeButton.length).toEqual(7);
});

test('5) O texto do botão deve corresponder ao nome do tipo, ex. Psychic', () => {
  renderWithRouter(<App />);
  const typeButton = screen.getByRole('button', { name: 'Psychic' });
  expect(typeButton).toBeDefined();
});

test('6) Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All ', () => {
  renderWithRouter(<App />);
  const typeButton = screen.getByRole('button', { name: 'All' });
  userEvent.click(typeButton);
  expect(screen.getByText('Pikachu')).toBeInTheDocument();
});
