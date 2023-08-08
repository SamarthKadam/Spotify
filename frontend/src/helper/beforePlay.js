export default function getBeforePlayingSong(cur,data,albumName){

    const dataP=data.find((data)=>data.name===albumName);
    const playlist=dataP.playListSongs;
    const index=playlist.findIndex((val)=>val.name===cur.name);

    return {inde:(index-1)%(playlist.length),value:playlist[(index-1)%playlist.length],playListSongs:playlist,len:playlist.length};
}