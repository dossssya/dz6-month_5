import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterData } from '../features/data/dataSlice';

const Filter = () => {
    const [filter, setFilter] = useState('');
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        dispatch(filterData(e.target.value));
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <input
                type="text"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Фильтровать данные..."
            />
        </div>
    );
};

export default Filter;
