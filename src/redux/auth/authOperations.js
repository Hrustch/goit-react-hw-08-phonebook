import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, publicApi, token } from 'redux/http';
import { selectToken } from './authSelector';

export const login = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
    try {
      const data = await publicApi.post('/users/login', body);
      token.set(data.data.token)
      return data.data;
    } catch (err) {
      return rejectWithValue();
    }
  }
);

export const register = createAsyncThunk('auth/register', async (body, { rejectWithValue }) => {
    try {
      const data = await publicApi.post('/users/signup', body);
      token.set(data.data.token)
      return data.data;
    } 
    catch (err) {
      return rejectWithValue();
    }
  }
);

export const getUser = createAsyncThunk('auth/getUser', async (_, {rejectWithValue, getState})=>{
    try {
        const tokenValue = selectToken(getState())
        console.log(tokenValue)
        if (!tokenValue){
            return rejectWithValue()
        }
        token.set(tokenValue)
        const data = await privateApi.get('/users/current')
        return data.data
    } catch (error) {
        token.unset()
        return rejectWithValue()
    }
} );

export const logout = createAsyncThunk('auth/logout', async (_, {rejectWithValue})=>{
    try {
      const data = await privateApi.post('/users/logout');
      token.unset()
      return data.data;
    } 
    catch (err) {
      return rejectWithValue();
    }
});