import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
    const counterMessage = screen.getByText(/Counter/i);
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByText(/0/i);
  expect(count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const increment = screen.getByRole('button', {name: '+'});
  const countVal = screen.getByTestId('count');
  expect(countVal).toHaveTextContent('0');
  userEvent.click(increment);
  expect(countVal).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const decrement = screen.getByRole('button', {name: '-'});
  const countVal = screen.getByTestId('count');
  expect(countVal).toHaveTextContent('0');
  userEvent.click(decrement);
  expect(countVal).toHaveTextContent('-1');
});
