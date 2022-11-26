import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
    name: 'global', 
    initialState: {
        mode: '',
        color: ''
    },
    reducers: {
        setMode: (state, action) => {
            return {
                ...state,
                mode: action.payload
            }
        },

        setColor: (state, action) => {
            return {
                ...state,
                color: action.payload
            }
        },

        getTheme: state => {
            return state
        }
    }
})

export default globalSlice