import { useState } from 'react';

import RestaurantsTable from './RestaurantsTable';
import SearchBar from './SearchBar';

import filterRestaurants from '../utils/filterRestaurants';
import DEFAULT_SELECTED_CATEGORY from '../constants/categories';
import selectCategories from '../utils/selectCategories';
import { Restaurant } from '../types/restaurants';

type FilterableRestaurantsTableProps = {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantsTable({
  restaurants,
}: FilterableRestaurantsTableProps) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setCategory] = useState(DEFAULT_SELECTED_CATEGORY);

  const filteredRestaurants = filterRestaurants(restaurants, {
    searchKeyword,
    selectedCategory,
  });

  const categories = selectCategories(restaurants);

  return (
    <>
      <SearchBar
        value={searchKeyword}
        setValue={setSearchKeyword}
        categories={categories}
        setCategory={setCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </>
  );
}
