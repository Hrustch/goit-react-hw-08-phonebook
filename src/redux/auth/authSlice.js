import { createSlice } from "@reduxjs/toolkit";
import { getUser, login, logout, register } from "./authOperations";

const initialState = {token:'', isLoading: false, isError: false, isAuth: false, user: null}
const authSlice = createSlice({ 
    name: 'auth', 
    initialState, 
    extraReducers:(builder)=>{
        builder
        .addCase(login.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, { payload })=>{
            state.user = payload.user
            state.isAuth = true
            state.isLoading = false
            state.token = payload.token
        })
        .addCase(login.rejected, (state)=>{
            state.isError = true
            state.isLoading = false
        })
        /* ------------------------------------------- */
        .addCase(register.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, { payload })=>{
            state.isLoading = false
            state.token = payload.token
            state.isAuth = true
        })
        .addCase(register.rejected, (state)=>{
            state.isError = true
            state.isLoading = false
        })
        /* ------------------------------------------- */
        .addCase(getUser.fulfilled, (state)=>{
            state.isAuth = true
        })
        .addCase(getUser.rejected, () => initialState)
        /* ------------------------------------------- */
        .addCase(logout.fulfilled, () => initialState)
    }
})

export const authReducer = authSlice.reducer