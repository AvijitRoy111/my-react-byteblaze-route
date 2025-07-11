import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import Blogs from './Components/Pages/Blogs/Blogs.jsx';
import Bookmarks from './Components/Pages/BookMarks/Bookmarks.jsx';
import BlogDetails from './Components/BlogDetails/BlogDetails.jsx';
import Content from './Components/Content/Content.jsx';
import Aouthor from './Components/aouthor/Aouthor.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/blogs',
          loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
          element: <Blogs />,
        },
        {
          path: '/blogDetails/:id',
          loader: ({ params }) =>
            fetch(`https://dev.to/api/articles/${params.id}`),
          element: <BlogDetails />,
          children: [
            {
              index: true,
              loader: ({ params }) =>
                fetch(`https://dev.to/api/articles/${params.id}`),
              element: <Content />,
            },
            {
              path: 'author',
              loader: ({ params }) =>
                fetch(`https://dev.to/api/articles/${params.id}`),
              element: <Aouthor />,
            },
          ],
        },
        {
          path: '/bookmarks',
          element: <Bookmarks />,
        },
      ],
    },
  ],
  {
    basename: '/my-react-byteblaze-route', // 🔥 এই লাইনটাই সবচেয়ে গুরুত্বপূর্ণ GitHub Pages এর জন্য
  }
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}></RouterProvider>
    <Toaster></Toaster>
  </StrictMode>,
)
