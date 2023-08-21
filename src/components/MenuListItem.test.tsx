import { render, screen } from '@testing-library/react';
import foods from '../../fixtures/foods';

import MenuListItem from './MenuListItem';

const menu = foods[0];

describe('MenuListItem', () => {
  it('renders food information', () => {
    render(<MenuListItem menu={menu} />);

    screen.getByText('짜장면(8,000원)');
  });

  it('renders children', () => {
    render((
      <MenuListItem menu={menu}>
        <p>맛있어요!</p>
      </MenuListItem>
    ));

    screen.getByText(/맛있어요!/);
  });
});
