import {createSlice} from '@reduxjs/toolkit';

const controllerSlice=createSlice({
    name:'Controller',
    initialState:{
        user:null,
        playlist:[],
        currSong:null,
        isplaying:[],
        CurrplayingName:undefined,
        IsBarVisible:false,
        currPlayingSongUI:undefined,
        SongBarWidth:0,
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
        playSong(state,action)
        {
            if(state.currSong)
            {
            state.currSong.pause();
            }
            state.currSong=action.payload
            state.currSong.play();
        },
        initializeIsPlaying(state,action)
        {
            state.isplaying=[];
            action.payload.forEach((data)=>{
                state.isplaying.push(false);
            })
        },
        setActivePlaying(state,action)
        {
            state.isplaying[action.payload]=true;
        },
        setCurrentPlayingName(state,action)
        {
            state.CurrplayingName=action.payload;
        },
        showBar(state,action)
        {
            state.IsBarVisible=true
        },
        setCurrPlayingSong(state,action)
        {
            state.currPlayingSongUI=action.payload;
        },
        setSongBarWidth(state,action)
        {
            state.SongBarWidth=action.payload;
        },
        setSongDuration(state,action)
        {
            state.currSong.currentTime=action.payload;
        }
    }

})

export const controllerAction=controllerSlice.actions;
export default controllerSlice;