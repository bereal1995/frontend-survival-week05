import useBucketStorage from '../hooks/useBucketStorage';
import usePostOrder from '../hooks/usePostOrder';
import { IReceipt } from '../types/receipt';
import priceToLocal from '../utils/priceToLocal';
import BucketList from './BucketList';
import OrderButton from './OrderButton';

type BucketProps = {
  addReceipt: (receipt: IReceipt) => void;
}

export default function Bucket({ addReceipt }: BucketProps) {
  const {
    bucket, totalPrice, clearBasket, removeMenu,
  } = useBucketStorage();
  const { postOrder } = usePostOrder();

  const buttonText = `합계: ${priceToLocal(totalPrice)}원 주문`;

  const handleClickOrder = async () => {
    const { receipt } = await postOrder();

    addReceipt(receipt);
    clearBasket();
  };

  return (
    <div
      style={{
        marginBottom: '3rem',
      }}
    >
      <h2>점심 바구니</h2>
      <BucketList
        bucketList={bucket}
        handleClickRemove={removeMenu}
      />
      <OrderButton
        text={buttonText}
        onClick={handleClickOrder}
      />
    </div>
  );
}
