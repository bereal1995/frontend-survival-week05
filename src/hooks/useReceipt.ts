import { useLocalStorage } from 'usehooks-ts';

import { IReceipt } from '../types/receipt';

export default function useReceipt() {
  const [receipt, setReceipt] = useLocalStorage<IReceipt>('receipt', {} as IReceipt);

  const addReceipt = (newReceipt: IReceipt) => {
    setReceipt(newReceipt);
  };

  const clearReceipt = () => {
    setReceipt({} as IReceipt);
  };

  return {
    receipt,
    addReceipt,
    clearReceipt,
  };
}
