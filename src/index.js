import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Добавьте свой файл стилей, если он у вас есть

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
