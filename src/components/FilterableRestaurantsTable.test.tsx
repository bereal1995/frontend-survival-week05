import { render, screen } from '@testing-library/react';

import FilterableRestaurantsTable from './FilterableRestaurantsTable';
import fixtures from '../../fixtures';

describe('FilterableRestaurantsTable', () => {
  const { restaurants } = fixtures;

  it('restaurantsTable을 렌더링한다', () => {
    render(<FilterableRestaurantsTable restaurants={restaurants} />);

    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });
});
