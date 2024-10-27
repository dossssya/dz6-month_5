import React from 'react';
import { useSelector } from 'react-redux';

const DataList = () => {
    const { filteredItems, status, error } = useSelector(state => state.data);

    if (status === 'loading') return <p>Загрузка...</p>;

    if (status === 'failed') return <p>Error: {error}</p>;

    if (filteredItems.length === 0) {
        return <p>Результаты не найдены</p>;
    }

    return (
        <ul>
            {filteredItems.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
};

export default DataList;
