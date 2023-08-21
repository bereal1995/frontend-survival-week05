import { render, screen } from '@testing-library/react';

import MenuList from './MenuList';
import fixtures from '../../fixtures';
import { RestaurantMenuItem } from '../types/restaurants';

const context = describe;

describe('MenuList', () => {
  it('menuList를 렌더링한다.', () => {
    const menuList = fixtures.foods;

    const { getByText } = render((
      <MenuList
        menuList={menuList}
      />
    ));

    expect(getByText(/짜장면/)).not.toBeNull();
  });

  context('with menu', () => {
    const menuList = fixtures.foods;

    it('renders foods list', () => {
      render(<MenuList menuList={menuList} />);

      screen.getByText(/짜장면/);
      screen.getByText(/짬뽕/);
    });
  });

  context('without menu', () => {
    const menuList: RestaurantMenuItem[] = [];

    it('renders no foods message', () => {
      render(<MenuList menuList={menuList} />);

      screen.getByText(/메뉴가 존재하지 않습니다/);
    });
  });
});
