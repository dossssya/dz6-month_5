import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import Loader from './Loader';

const DataDisplay = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) return <Loader />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <ul>
            {data.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

export default DataDisplay;
