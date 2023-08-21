import { fireEvent, render, screen } from '@testing-library/react';

import OrderButton from './OrderButton';

describe('OrderButton', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderOrderButton() {
    render((
      <OrderButton
        text="주문하기"
        onClick={handleClick}
      />
    ));
  }

  it('renders order total price', () => {
    renderOrderButton();

    screen.getByText(/주문/);
  });

  it('listens for order click event', () => {
    renderOrderButton();

    fireEvent.click(screen.getByText(/주문/));

    expect(handleClick).toBeCalled();
  });
});
