export default async function likedSong(songName,isActive){
    const cookie=localStorage.getItem('jwt');

    const data={
        songName,
        isActive
    }

    try{
        const response=await fetch('http://localhost:8000/api/v1/songs/likedSong', {method:'post',
        headers:{
            'Content-type':'application/json',
            'Authorization':`Bearer ${cookie}`
        },body:JSON.stringify(data)})   

        const responseData=await response.json();
        console.log(responseData);
    }catch(err)
    {
        console.log(err);
    }
}


// const authdata={
//     email:data.get('email'),
//     password:data.get('password')
//   }


//   const response=await fetch('http://127.0.0.1:8000/api/v1/users/login',{
//     method:request.method,
//     headers:{
//       'Content-type':'application/json'
//     },
//     body:JSON.stringify(authdata)
//   })
