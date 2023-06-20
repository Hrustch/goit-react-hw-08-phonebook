import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOperations";

const initialState = {contacts:[], filter:""}

const phoneBookSlice = createSlice({
    name: "defName",
    initialState: initialState,
    reducers:{
        setFilter: (state, action)=>{
            state.filter = action.payload            
        }      
    },
    extraReducers:{
        [fetchContacts.pending](state, action) {
            state.isLoading = true;
            state.isError = false;
        },
        [fetchContacts.fulfilled](state, action) {
            console.log(action.payload)
            state.contacts = action.payload
            state.isLoading = false
        },
        [fetchContacts.rejected](state, action) {
            state.isError = true;
            state.isLoading = false;
        },
        /* --------------------------------------------- */
        [addContact.pending](state, action) {
            state.isLoading = true;
            state.isError = false;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false
            state.contacts.push(action.payload);
        },
        [addContact.rejected](state, action) {
            state.isError = true;
            state.isLoading = false;
        },
        /* --------------------------------------------- */
        [deleteContact.pending](state, action) {
            state.isLoading = true;
            state.isError = false;
        },
        [deleteContact.fulfilled](state, action) {
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload.id
            );
            state.isLoading = false;
        },
        [deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.isError = true;
        },
    }
})


export const phoneBookReducer = phoneBookSlice.reducer
export const {setFilter} = phoneBookSlice.actions