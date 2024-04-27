import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Shered/ErrorPage/ErrorPage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './ContextApi/AuthProvider/AuthProvider';
import AllArts from './Components/AllArts/AllArts';
import AddCraft from './Components/AddCraft/AddCraft';
import MyArtList from './Components/MyArtList/MyArtList';
import ContactUs from './Components/ContactUs/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allArts",
        element: <AllArts></AllArts>,
      },
      {
        path: "/addCraft",
        element: <AddCraft></AddCraft>,
      },
      {
        path: "/myArtList",
        element: <MyArtList></MyArtList>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)