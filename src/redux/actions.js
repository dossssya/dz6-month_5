export const fetchData = () => async (dispatch) => {
    dispatch({ type: 'FETCH_REQUEST' });
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', error });
    }
};
