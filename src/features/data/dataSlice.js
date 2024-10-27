import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDataThunk = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }
    const data = await response.json();
    return data;
});


const dataSlice = createSlice({
    name: 'data',
    initialState: {
        items: [],
        filteredItems: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        filterData: (state, action) => {
            const filterValue = action.payload.toLowerCase();
            state.filteredItems = state.items.filter(item =>
                item.title.toLowerCase().includes(filterValue)
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataThunk.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchDataThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.filteredItems = action.payload;
            })
            .addCase(fetchDataThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});


export const { filterData } = dataSlice.actions;

export default dataSlice.reducer;
