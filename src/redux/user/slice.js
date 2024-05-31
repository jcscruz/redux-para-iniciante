import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser : null
}

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers:{
        login: (state, action) => {
            state.currentUser = action.payload
            return
        },
        logout: (state, action) => {
            state.currentUser = null
        }
    }
})



export const { login, logout} = userSlice.actions

export default userSlice.reducer