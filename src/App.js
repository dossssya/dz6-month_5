// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import FactDisplay from './components/FactDisplay';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <div className="container">
                    <FactDisplay />
                </div>
            </div>
        </Provider>
    );
};

export default App;
