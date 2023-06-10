import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current:  JSON.parse(localStorage.getItem('user') || '{}'),
        settings: false
    },
    reducers: {
        signup(state, action) {
            console.log(action.payload)
        },
        signin(state, action) {
            localStorage.setItem('access_token', action.payload.data.access_token)
            localStorage.setItem('user', JSON.stringify(action.payload.data.userInfo))
        },
        setProfile(state, action) {
            localStorage.setItem('user', JSON.stringify(action.payload.data))
        },
        logout(state) {
            localStorage.removeItem('user')
            localStorage.removeItem('access_token')
            state.current = {}
        },
        editInfo(state, action) {
            localStorage.setItem('user', JSON.stringify(action.payload.data))
        },
        updateHost(state) {
            state.settings = true
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