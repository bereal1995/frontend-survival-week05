import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const label = 'Name';
  const value = 'Tester';

  const setValue = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderTextField() {
    render((
      <TextField
        label={label}
        placeholder="Input your name"
        value={value}
        setValue={setValue}
      />
    ));
  }

  it('renders elements', () => {
    renderTextField();

    screen.getByLabelText(label);
    screen.getByPlaceholderText(/Input/);
    screen.getByDisplayValue(value);
  });

  context('when user enters name', () => {
    it('calls “setText” handler', () => {
      renderTextField();

      fireEvent.change(screen.getByLabelText(label), {
        target: { value: 'New Name' },
      });

      expect(setValue).toBeCalledWith('New Name');
    });
  });
});
