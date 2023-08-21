import { fireEvent, render, screen } from '@testing-library/react';

import BucketList from './BucketList';
import foods from '../../fixtures/foods';

const removeMenu = jest.fn();

jest.mock('../hooks/useBucketStorage', () => () => ({
  bucket: foods,
  removeMenu,
}));

describe('BucketList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCartItem() {
    render((
      <BucketList
        bucketList={foods}
        handleClickRemove={removeMenu}
      />
    ));
  }

  it('renders item information', () => {
    renderCartItem();

    screen.getByText('짜장면(8,000원)');
  });

  it('listens for cancel button click event', () => {
    renderCartItem();

    const cancelButton = screen.getAllByText('취소')[0];

    fireEvent.click(cancelButton);

    expect(removeMenu).toBeCalled();
  });
});
