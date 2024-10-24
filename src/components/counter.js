import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/action';
import '../App.css'; // Импортируем общий файл стилей

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <h1>Счетчик: {count}</h1>
            <button onClick={() => dispatch(increment(1))}>+1</button>
            <button onClick={() => dispatch(increment(10))}>+10</button>
            <button onClick={() => dispatch(decrement(1))}>-1</button>
            <button onClick={() => dispatch(decrement(10))}>-10</button>
            <button onClick={() => dispatch(reset())}>Сброс</button>
        </div>
    );
};

export default Counter;
