import axios from 'axios';

export const fetchFact = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_FACT_REQUEST' });
        try {
            const response = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
            dispatch({ type: 'FETCH_FACT_SUCCESS', payload: response.data.text });
        } catch (error) {
            dispatch({ type: 'FETCH_FACT_FAILURE', payload: error.message });
        }
    };
};
