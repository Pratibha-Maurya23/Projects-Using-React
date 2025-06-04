import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Bag from './routes/Bag.jsx'
import Home from './routes/Home.jsx'
import {Provider} from "react-redux"
import myntrStore from './store/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />,},
      { path: "/bag", element: <Bag />,/* action: createPostAction*/},
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntrStore}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
)
