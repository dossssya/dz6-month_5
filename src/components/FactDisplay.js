import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFact } from '../redux/actions/factActions';

const FactDisplay = () => {
    const dispatch = useDispatch();
    const { fact, loading, error } = useSelector((state) => state.fact);

    useEffect(() => {
        dispatch(fetchFact());
    }, [dispatch]);

    const handleFetchFact = () => {
        dispatch(fetchFact());
    };

    return (
        <div>
            <h1>Случайный факт</h1>
            {loading ? (
                <p className="loading">Загрузка...</p>
            ) : error ? (
                <p className="error">Ошибка: {error}</p>
            ) : (
                <p>{fact}</p>
            )}
            <button onClick={handleFetchFact}>
                Получить другой факт
            </button>
        </div>
    );
};

export default FactDisplay;
