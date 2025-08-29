import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Quiz from './Quiz.jsx';
import Login from './User/Login.jsx';
import SignUp from './User/SignUp.jsx';
import UploadProfile from './User/UploadProfile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/quiz/:category",
        element:<Quiz></Quiz>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/upload",
        element:<UploadProfile></UploadProfile>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
