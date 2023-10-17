import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counterSlice";
import { RootState } from "../store/store"; // Import the RootState type

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;
