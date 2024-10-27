import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataThunk } from '../features/data/dataSlice';
import Filter from './Filter';
import DataList from './DataList';
import '../App.css'

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataThunk());
    }, [dispatch]);

    return (
        <div>
            <h1>Список данных</h1>
            <Filter />
            <DataList />
        </div>
    );
};

export default App;
