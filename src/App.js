import React from 'react';
import DataDisplay from './components/DataDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container mt-5">
            <h1>Data Fetching with Redux-Thunk</h1>
            <DataDisplay />
        </div>
    );
}

export default App;
