import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNumber1, setNumber2, add, subtract, multiply, divide } from "./redux/calculatorSlice";
import "./App.css";

function App() {
    const dispatch = useDispatch();
    const { number1, number2, result } = useSelector((state) => state.calculator);

    return (
        <div className="calculator">
            <h1>Калькулятор</h1>
            <input
                type="number"
                value={number1}
                onChange={(e) => dispatch(setNumber1(e.target.value))}
                placeholder="Введите первое число:"
            />
            <input
                type="number"
                value={number2}
                onChange={(e) => dispatch(setNumber2(e.target.value))}
                placeholder="Введите второе число:"
            />
            <div className="button-container">
                <button onClick={() => dispatch(add())} className="button">+</button>
                <button onClick={() => dispatch(subtract())} className="button">-</button>
                <button onClick={() => dispatch(multiply())} className="button">×</button>
                <button onClick={() => dispatch(divide())} className="button">÷</button>
            </div>
            <h2 className="result">Ответ: {result}</h2>
        </div>
    );
}

export default App;
