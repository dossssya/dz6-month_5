import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: "calculator",
    initialState: {
        number1: "",
        number2: "",
        result: 0,
    },
    reducers: {
        setNumber1: (state, action) => {
            state.number1 = action.payload;
        },
        setNumber2: (state, action) => {
            state.number2 = action.payload;
        },
        add: (state) => {
            state.result = Number(state.number1) + Number(state.number2);
        },
        subtract: (state) => {
            state.result = Number(state.number1) - Number(state.number2);
        },
        multiply: (state) => {
            state.result = Number(state.number1) * Number(state.number2);
        },
        divide: (state) => {
            const num1 = Number(state.number1);
            const num2 = Number(state.number2);
            state.result = num2 !== 0 ? num1 / num2 : "Ошибка";
        }
    },
});

export const { setNumber1, setNumber2, add, subtract, multiply, divide } = calculatorSlice.actions;
export default calculatorSlice.reducer;
