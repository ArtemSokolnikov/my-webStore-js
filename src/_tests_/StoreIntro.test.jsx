import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved, within } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Card from '../components/Card';
import CardCollection from '../components/CardCollection';
import ProductDetails from '../components/ProductDetails';
import StoreIntro from '../components/StoreIntro';
import store from '../store';

describe('StoreIntro basic testing', () => {
  const mockProduct = {
    id: 1,
    name: 'Product 1',
    price: 10,
    description: 'new description',
    creationDate: new Date(),
  };

  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}> /* хранит историю “URL”-переходов в памяти, ('/') — это путь, с которого начнётся тест.*/
          <Routes>
            <Route path='/' element={<StoreIntro />}>
              <Route index element={<CardCollection />} />
              <Route path='product/:id' element={<CardCollection />}>
                <Route index element={<ProductDetails />} />
              </Route>
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  });

  test('renders Wrapper component', () => {
    const wrapper =  document.querySelector('.wrapper')//document содержит весь DOM страницы
    expect(wrapper).toBeInTheDocument();
  });

  test('renders "Add item" button', () => {
    // const button = screen.getByTestId('button');//screen содержит только то, что было отрендерено внутри render()
    const button = screen.getByRole('button', { name: /add item/i });//getByRole позволяет находить элементы по их роли в DOM, а не по тексту или другим атрибутам.
    expect(button).toBeInTheDocument();
  });

  test('filters products by name', () => {
    const searchInput = screen.getByPlaceholderText('Add name for filtering');
    fireEvent.change(searchInput, { target: { value: 'Helico Beats' } });// симуляции изменения значения в форме, для проверки, что среди карточек есть та, где название — Helico Beats
    // const cards = screen.getAllByTestId('card');
    const cards = screen.getAllByRole('listitem');//getAllByRole позволяет находить все элементы с определенной ролью, в данном случае — все карточки.
    const filteredCard = cards.find(card =>
      within(card).getByText(/Helico Beats/i)//within Чтобы протестировать только один конкретный элемент, блягодаря этому это не  обычный DOM-узел, а объект с query-методами.
    );
    expect(filteredCard).toBeInTheDocument();
  });

  test('removes product when remove button is clicked', () => {
    const cardsBefore = screen.getAllByTestId('card');
    expect(cardsBefore.length).toBeGreaterThan(0);

    const firstCard = cardsBefore[0];
    const removeButton = within(firstCard).getByText(/remove/i);// Находим кнопку "remove" в первой карточке
    fireEvent.click(removeButton); // Эмулируем клик и Проверяем, что карточка исчезла
    const updatedCards = screen.queryAllByTestId('card');
    expect(updatedCards.length).toBeLessThan(cardsBefore.length);
  });

  test('displays product details correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card product={mockProduct} />
        </MemoryRouter>
      </Provider>
    );
    const productName = screen.getByText('Product 1');
    const productPrice = screen.getByText(content => content.includes('10'));
    const productDescription = screen.getByText(content => content.includes('new description'));

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
  });
});
