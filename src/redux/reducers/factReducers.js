const initialState = {
    fact: '',
    loading: false,
    error: null,
};

const factReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FACT_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_FACT_SUCCESS':
            return { ...state, loading: false, fact: action.payload };
        case 'FETCH_FACT_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default factReducer;
