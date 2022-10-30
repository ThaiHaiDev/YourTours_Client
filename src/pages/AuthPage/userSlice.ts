import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from '../../services/authApi'

// export const signup = createAsyncThunk(
//     'user/signup',
//     async (payload) => {
//         // call API to register
//         const data = await authApi.signUp(payload)
//         // sava data to local storage
//         localStorage.setItem('access_token', 'data.jwt')
//         localStorage.setItem('user', 'JSON.stringify(data.user)')
//         // return user data
//         return data
//     }
// )

// export const login = createAsyncThunk(
//     'user/login',
//     async (payload) => {
//         // call API to register
//         // const data = await userApi.login(payload)
//         // sava data to local storage
//         localStorage.setItem('access_token', 'data.jwt')
//         localStorage.setItem('user', 'JSON.stringify(data.user)')
//         // return user data
//         return 'data.user'
//     }
// )

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current:  JSON.parse(localStorage.getItem('user') || '{}'),
        // settings: {}
    },
    reducers: {
        signup(state, action) {
            console.log(action.payload)
        },
        signin(state, action) {
            localStorage.setItem('access_token', action.payload.data.access_token)
            localStorage.setItem('user', JSON.stringify(action.payload.data.userInfo))
        },
        logout(state) {
            localStorage.removeItem('user')
            localStorage.removeItem('access_token')
            state.current = {}
        }

    },
    // extraReducers: (builder) => {


    //     builder.addCase(signup.fulfilled, 
    //         (state, action) => {
    //         // We add all the new todos into the state
    //         // and change `status` back to `idle`:
    //         state.current = action.payload
    //       });

        // [login.fulfilled]: (state, action) => {
        //     state.current = action.payload
        // }
    // }
})

export default userSlice