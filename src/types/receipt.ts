import { RestaurantMenuItem } from './restaurants';

export interface IReceipt {
  id: string;
  menu: RestaurantMenuItem[];
  totalPrice: number;
}
