import { render, screen } from '@testing-library/react';

import Receipt from './Receipt';
import fixtures from '../../fixtures';
import { IReceipt } from '../types/receipt';

const context = describe;

describe('Receipt', () => {
  it('주문 내역이 올바르게 렌더링되어야 함', () => {
    const { receipt } = fixtures;
    const { getByText } = render(<Receipt receipt={receipt} />);

    const totalPrice = screen.getByText(/13,000/);
    const menu1 = getByText(/짜장면/);
    const menu2 = getByText(/짬뽕/);
    expect(totalPrice).toBeInTheDocument();
    expect(menu1).toBeInTheDocument();
    expect(menu2).toBeInTheDocument();
  });

  context('without receipt', () => {
    const receipt = {} as IReceipt;
    it('renders message', () => {
      render(<Receipt receipt={receipt} />);

      screen.getByText(/영수증 나오는 곳/);
    });
  });
});
