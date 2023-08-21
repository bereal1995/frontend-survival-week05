import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const categories = ['전체', '한식', '중식', '일식'];

  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  function renderSearchBar() {
    render((
      <SearchBar
        categories={categories}
        setCategory={setFilterCategory}
        value=""
        setValue={setFilterText}
      />
    ));
  }

  it('renders search label text', () => {
    renderSearchBar();

    screen.getByLabelText(/검색/);
  });

  it('renders all categories', () => {
    renderSearchBar();

    screen.getByText(/전체/);

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
