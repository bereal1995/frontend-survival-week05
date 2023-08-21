import { render, screen } from '@testing-library/react';

import Bucket from './Bucket';
import fixtures from '../../fixtures';

jest.mock('../hooks/useBucketStorage', () => () => ({
  bucket: fixtures.foods,
  totalPrice: 16000,
  clearBasket: jest.fn(),
  removeMenu: jest.fn(),
}));

describe('Bucket', () => {
  const addReceipt = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title', () => {
    render(<Bucket addReceipt={addReceipt} />);

    screen.getByText(/점심 바구니/);
  });

  it('renders order food list', () => {
    render(<Bucket addReceipt={addReceipt} />);

    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });
});
