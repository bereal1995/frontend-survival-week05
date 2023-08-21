import { IReceipt } from '../src/types/receipt';
import foods from './foods';

const receipt: IReceipt = {
  id: 'RECEIPT_ID',
  menu: foods,
  totalPrice: foods.reduce((acc, cur) => acc + cur.price, 0),
};

export default receipt;
