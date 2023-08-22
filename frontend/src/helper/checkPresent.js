export default function checkPresent(likedSongs,name){

   let isPresent=false;
    for(let i=0;i<likedSongs.length;i++)
{
  if(likedSongs[i].name===name)
  {
    isPresent=true;
    break;
  }
}
return isPresent;
}