const initialState = {
    loading: false,
    data: [],
    error: null,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { loading: false, data: action.payload, error: null };
        case 'FETCH_FAILURE':
            return { loading: false, data: [], error: action.error };
        default:
            return state;
    }
};
