/* eslint-disable no-unsend-vars */
import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../pages/home/Home';
import CountactUs from '../pages/miniPage/CountactUs';
import About from '../pages/miniPage/About';
import Konferencija from '../pages/miniPage/Konferencija';
import InnTechCasopis from '../pages/miniPage/InnTechCasopis';
import SingleBlog from '../pages/blogs/singleBlog/SingleBlog'
import Login from '../pages/user/Login';
import Register from '../pages/user/Register';
import AdminLayout from '../pages/admin/AdminLayout';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import AddPost from '../pages/admin/post/AddPost';
import ManagePosts from '../pages/admin/post/ManagePosts';
import ManageUsers from '../pages/admin/user/ManageUsers';
import PrivateRouter from './PrivateRouter';
import UpdatePost from '../pages/admin/post/UpdatePost';
import HomeConference from '../pages/miniPage/conference/HomeConference';
import AboutConference from '../pages/miniPage/conference/AboutConference';
import TopicsLectures from '../pages/miniPage/conference/TopicsLectures';
import Speakers from '../pages/miniPage/conference/Speakers';
import Agenda from '../pages/miniPage/conference/Agenda';
import Registration from '../pages/miniPage/conference/Registration';

// Glavna konfiguracija ruta za aplikaciju.
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/konferencija",
          element: <Konferencija/>,
          children: [
            {
              path: '',
              element: <HomeConference/>
            },
            {
              path: 'o-konferenciji',
              element: <AboutConference/>
            },
            {
              path: "teme-i-predavanja",
              element: <TopicsLectures/>
            },
            {
              path: "govornici-i-predavaci",
              element: <Speakers/>
            },
            {
              path: "agenda",
              element: <Agenda/>
            },
            {
              path: "registracija",
              element: <Registration/>
            }
          ]
        },
        {
          path: "/inn-tech-casopis",
          element: <InnTechCasopis/>
        },
        {
          path: "/about-us",
          element: <About/>
        },
        {
          path: "/contact-us",
          element: <CountactUs/>
        },
        {
          path: "blogs/:id",
          element: <SingleBlog/>
        },
        {
          path: "/login",
          element:<Login/>
        },
        {
          path: "/register",
          element:<Register/>
        },
        {
          path:"/dashboard",
          element: <PrivateRouter><AdminLayout/></PrivateRouter>, //Biće zaštićeno od strane administratora: Privatna ruta za korisnike
          children: [
            {
              path: '',
              element: <Dashboard/>
            },
            {
              path: "add-new-post",
              element: <AddPost/>
            },
            {
              path: "manage-items",
              element: <ManagePosts/>
            },
            {
              path: "users",
              element: <ManageUsers/>
            },
            {
              path: "update-items/:id",
              element: <UpdatePost/>
            }
          ]
        }
      ]
    },
  ]);

  export default router