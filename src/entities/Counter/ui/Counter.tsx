import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const incrementCounter = () => {
    dispatch(counterActions.increment());
  };

  const decrementCounter = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid='value'>{counterValue}</h1>
      <Button data-testid='increment' onClick={incrementCounter}>{`increment`}</Button>
      <Button data-testid='decrement' onClick={decrementCounter}>{`decrement`}</Button>
    </div>
  );
};
