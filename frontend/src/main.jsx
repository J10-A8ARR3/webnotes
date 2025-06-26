import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import NewPost from './routers/NewPost.jsx'
import RootLayout from './routers/RootLayout.jsx'
import Posts from './routers/Posts.jsx'

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />, 
    children: [
      { path: '/', 
        element: <Posts />, 
        children: [
          { path: '/create-post', element: <NewPost /> },
        ]},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
