import _ from 'lodash';

import MenuListItem from './MenuListItem';
import priceToLocal from '../utils/priceToLocal';
import { IReceipt } from '../types/receipt';

type ReceiptProps = {
  receipt: IReceipt;
}

export default function Receipt({ receipt }: ReceiptProps) {
  if (_.isEmpty(receipt)) {
    return (
      <p>[영수증 나오는 곳]</p>
    );
  }

  const { id, menu, totalPrice } = receipt;

  return (
    <div style={{
      width: '30rem',
      padding: '1rem',
    }}
    >
      <div style={{
        padding: '1rem',
        border: '1px solid black',
        textAlign: 'center',
      }}
      >
        <h2>영수증</h2>
        <div>
          <h3>주문번호</h3>
          <p>{id}</p>
        </div>
        <div>
          <h3>주문목록</h3>
          <ul style={{
            listStyle: 'none',
            padding: '0px',
          }}
          >
            {
              menu.map((menuItem, index) => {
                const keyId = `${menuItem.id}-${index}`;
                return (
                  <MenuListItem
                    key={keyId}
                    menu={menuItem}
                  />
                );
              })
            }
          </ul>
        </div>
        <p>{`총 가격: ${priceToLocal(totalPrice)}원`}</p>
      </div>
    </div>
  );
}
