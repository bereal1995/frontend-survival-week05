import { useInterval } from 'usehooks-ts';
import Bucket from './components/Bucket';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import Receipt from './components/Receipt';
import useReceipt from './hooks/useReceipt';
import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const { receipt, clearReceipt, addReceipt } = useReceipt();
  const restaurants = useFetchRestaurants();
  const isPlaying = receipt !== null;

  useInterval(() => {
    clearReceipt();
  }, isPlaying ? 5_000 : null);

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div>
        <h1>푸드코트 키오스크</h1>
        <Bucket addReceipt={addReceipt} />
        <FilterableRestaurantsTable restaurants={restaurants} />
      </div>
      <Receipt receipt={receipt} />
    </div>
  );
}
