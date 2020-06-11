import React from 'react';
import { render } from '@testing-library/react';
import MiniEcommerce from './Mini-ecommerce';


describe('Teste do componente mini-ecommerce', () => {

  test('deve renderizar o componente', () => {
    const { getByText } = render(<MiniEcommerce />);
    const linkElement = getByText(/checkout/i);
    expect(linkElement).toBeInTheDocument();
  });

});
