import { fireEvent, render, screen } from '@testing-library/react';

import CategoryButton from './CategoryButton';

describe('CategoryButton', () => {
  const category = '한식';
  const setFilterCategory = jest.fn();

  function renderCategory() {
    render((
      <CategoryButton
        category={category}
        setCategory={setFilterCategory}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders category text', () => {
    renderCategory();

    screen.getByText('한식');
  });

  it('listens for category click event', () => {
    renderCategory();

    fireEvent.click(screen.getByText('한식'));

    expect(setFilterCategory).toBeCalledWith(category);
  });
});
