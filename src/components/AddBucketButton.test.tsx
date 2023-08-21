import { fireEvent, render, screen } from '@testing-library/react';
import AddBucketButton from './AddBucketButton';

describe('AddBucketButton', () => {
  const addBucket = jest.fn();

  function renderAddBucketButton() {
    return render((
      <AddBucketButton
        name="선택"
        title="선택"
        onClick={addBucket}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('AddBucketButton 렌더링 한다.', () => {
    renderAddBucketButton();

    expect(screen.getByText('선택')).toBeInTheDocument();
  });

  it('AddBucketButton 클릭하면 addBucket을 호출한다.', () => {
    renderAddBucketButton();

    fireEvent.click(screen.getByText('선택'));

    expect(addBucket).toBeCalled();
  });
});
