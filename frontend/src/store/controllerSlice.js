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
        isCurrentPlay:false,
        isPopup:false,
        likedSongs:[]
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
        setInActivePlaying(state,action)
        {
            state.isplaying[action.payload]=false;
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
        },
        setPlayStop(state,action)
        {
            if(!state.currSong.paused)
            {
                state.currSong.pause();
            }
            else{
                state.currSong.play();
            }
        },
        togglePlaying(state,action)
        {
            state.isCurrentPlay=!state.isCurrentPlay;
        },
        setisPopUpActive(state,action)
        {
            state.isPopup=true;
        },
        setIsPopUpFalse(state,action)
        {
            state.isPopup=false;
        },
        addLikedSongs(state,action)
        {
            state.likedSongs.push(action.payload);
        },
        removeLikedSongs(state,action)
        {
            state.likedSongs=state.likedSongs.filter((data)=>data.name!==action.payload.name);
        },
        initializeLikedSongs(state,action)
        {
            state.likedSongs=action.payload;
        }
        }

})

export const controllerAction=controllerSlice.actions;
export default controllerSlice;