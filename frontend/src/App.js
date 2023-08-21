import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Login,{action as loginAction} from './pages/Login';
import SignUp,{action as SignupAction} from './pages/SignUp';
import SongPage,{loader as dataAction} from './pages/SongPage';
import Playlist from './pages/Playlist';
import Root from './pages/Root';
import LikedSongs from './pages/LikedSongs';

const router=createBrowserRouter([
  {
    path:'/',errorElement:<ErrorPage isError={0}></ErrorPage>,children:[
      {
        path:'home',element:<HomePage></HomePage>
      },
      {
        path:'login',element:<Login></Login>,action:loginAction
      },
      {
        path:'signup',element:<SignUp></SignUp>,action:SignupAction
      },
      {
        path:'play',id:'songPage',element:<Root></Root>,loader:dataAction,children:[
          {
            index:true,element:<SongPage></SongPage>
          },
          {
            path:':id',element:<Playlist></Playlist>
          },
          {
            path:'likedSongs',element:<LikedSongs></LikedSongs>
          }
        ]
      }
    ]
  }
])


function App() {

  return <RouterProvider router={router}></RouterProvider>
}
export default App;


///featuers to implement 1>next,prevPlay 2>search 3>likesongs