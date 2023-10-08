import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    coins: [],
    renderCoins: 10,
    status: null,
    error:null,
}

export const getCoins = createAsyncThunk(
    'useDefi/getCoins',
    async (amount, {rejectWithValue}) => {

        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${amount}&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;
        try {
            const response = await axios.get(url)
            if(response.status !== 200) {
                throw new Error('ServerError');
            }
            const data = await response.data
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const useDefiSlice = createSlice({
    name:'useDefi',
    initialState,
    reducers: {},
    extraReducers: {
        [getCoins.pending]: (state) =>{
            state.status = 'loading';
            state.error = null;
        },
        [getCoins.fulfilled]: (state,action) =>{
            state.status = 'resolve';
            state.coins = action.payload
        },
        [getCoins.rejected]: (state, action) =>{
            state.status = 'rejected';
            state.error = action.payload;
        },
    }

})

export default useDefiSlice.reducer