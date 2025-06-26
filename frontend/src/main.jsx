import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import NewPost, {action as newPostAction } from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import Posts, { loader as postsLoader } from './routes/Posts.jsx'
import PostDetails, {loader as postsDetailsloader } from './routes/PostDetails.jsx'

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />, 
    children: [
      { path: '/', 
        element: <Posts />, 
        loader: postsLoader,
        children: [
          { path: '/create-post', 
            element: <NewPost />,
            action: newPostAction,
          },
          { path: '/:id',
            element: <PostDetails />,
            action: postsDetailsloader,
          },
        ]},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)