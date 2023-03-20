import {createSlice} from '@reduxjs/toolkit';

const controllerSlice=createSlice({
    name:'Controller',
    initialState:{
        user:null,
        playlist:[],
    },
    reducers:{
        setUser(state,action)
        {
            state.user=action.payload;
        },
        setPlaylist(state,action)
        {
            state.playlist=action.payload;
        },
    }

})

export const controllerAction=controllerSlice.actions;
export default controllerSlice;