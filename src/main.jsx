import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import AllBlogs from './Pages/AllBlogs/AllBlogs';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import AllProject from './Pages/AllProject/AllProject';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/all-blogs',
        element:<AllBlogs></AllBlogs>
      },
      {
        path:'/blog-details/:id',
        element:<BlogDetails></BlogDetails>
      },
      {
        path:'/all-project',
        element:<AllProject></AllProject>
      },
      {
        path:'/project-details/:id',
        element:<ProjectDetails></ProjectDetails>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
