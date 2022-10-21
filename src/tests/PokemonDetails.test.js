import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import renderWithRouter from './renderWithRouter';

test('1) Teste se as informações detalhadas do pokémon selecionado são mostradas na tela;', () => {
  renderWithRouter(<App />);
  const linkProjects = screen.getByRole('link', { name: /More Details/i });
  userEvent.click(linkProjects);
  const details = screen.getByRole('heading', { name: /Pikachu Details/i });
  expect(details).toBeDefined();
  const sumary = screen.getByRole('heading', { name: /Summary/i });
  expect(sumary).toBeDefined();
  const summaryText = screen.getByText(/This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat./i);
  expect(summaryText.textContent).toEqual('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
});

test('2) Teste se existe na página uma seção com os mapas contendo as localizações do pokémon;', () => {
  renderWithRouter(<App />);
  const linkProjects = screen.getByRole('link', { name: /More Details/i });
  userEvent.click(linkProjects);
  const pokeLocation = screen.getByRole('heading', { name: /Game Locations of Pikachu/i });
  expect(pokeLocation.textContent).toBe('Game Locations of Pikachu');

  const imag = screen.getAllByRole('img');
  expect(imag[1].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(imag[1].alt).toBe('Pikachu location');
  expect(imag[2].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  expect(imag[2].alt).toBe('Pikachu location');
});

test('3) Teste se existe na página uma seção com os mapas contendo as localizações do pokémon;', () => {
  renderWithRouter(<App />);
  const linkProjects = screen.getByRole('link', { name: /More Details/i });
  userEvent.click(linkProjects);
  const checkBox = screen.getByLabelText('Pokémon favoritado?');
  expect(checkBox).toBeInTheDocument();
});
