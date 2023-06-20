import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi } from "./http";


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
    const data = await privateApi.get('/contacts');
    return data.data;
});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact) => {
    const data = await privateApi.post('/contacts', newContact);
    return data.data;
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactid) => {
    const data = await privateApi.delete('/contacts/'+contactid);
    return data.data;
});

