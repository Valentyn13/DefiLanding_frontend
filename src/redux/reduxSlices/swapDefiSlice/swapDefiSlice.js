import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    selected: 'Ethereum',
    net:'ethereum-ecosystem',
    selectedCoinToSwap:'',
    coinsToSwap: [],
    coinToBuy:'',
    status:null,
}

export const getCoinsToSwap = createAsyncThunk(
    'swap/getCoinsToSwap',
    async (_, {rejectWithValue,getState, dispatch}) => {
        const state = getState().swap.net
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${state}&order=market_cap_desc&per_page=25&page=1&sparkline=false`;
        try {
            const response = await axios.get(url);
            if(response.status !== 200) {
                throw new Error('ServerError')
            }
            const data = await response.data
            dispatch(setSelectedCoinToSwap(data[0]))
            dispatch(setCoinToBuy(data[6]))
            return data
            
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

export const swapDefiSlice = createSlice({
    name:'swap',
    initialState,
    reducers: {
        getSelectedNetwork: (state, action) => {
            state.selected = action.payload.network.name;
            state.net = action.payload.network.net
        },
        setSelectedCoinToSwap: (state, action) => {
            state.selectedCoinToSwap = action.payload
        },
        setCoinToBuy: (state, action) => {
            state.coinToBuy = action.payload
        }
    },
    extraReducers: {
        [getCoinsToSwap.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getCoinsToSwap.fulfilled]: (state, action) => {
            state.status = 'resolve';
            state.coinsToSwap = action.payload
        },
        [getCoinsToSwap.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
    
})


export const {getSelectedNetwork, setSelectedCoinToSwap, setCoinToBuy} = swapDefiSlice.actions;
export default swapDefiSlice.reducer;