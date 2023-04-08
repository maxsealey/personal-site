import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    items:[],
    status:null,
    error:null
};

export const projectFetch = createAsyncThunk(
    "projects/projectsFetch",
    async(id=null, {rejectWithValue})=> {
        try {
            const res = await axios.get("https://http://localhost:8787")
            return res?.data
        } catch (err){
            return rejectWithValue("error retrieving data");
        }
    }
);

const projectSlice = createSlice(
    {
        name:"projects",
        initialState,
        reducers: {},
        extraReducers: {
            [projectFetch.pending]: (state, action) =>{
                state.status = "pending"
            },
            [projectFetch.success]: (state, action) =>{
                state.status = "success"
                state.items = action.payload
            },
            [projectFetch.failed]: (state, action) =>{
                state.status = "failed"
                state.error = action.payload
            }
        }
    }
);

export default projectSlice.reducer;