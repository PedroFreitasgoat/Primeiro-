import { createBrowserRouter }  from 'react-router-dom'

import { Home } from './pages/home'
import { Cart } from './pages/cart'

import { Leayout } from './components/leayout'

const router = createBrowserRouter([
  {
    element: <Leayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  }
])

export { router }