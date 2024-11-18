"use client";
import { decrement, increment } from "@/lib/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const CounterComp = () => {
  const count = useSelector((state) => state.counterSlice.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterComp;
