import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Management from './layouts/management'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Management />,
    children: [
      {
        path: "",
        index: 1,
        element: <Home/>
      },
      {
        path: "products",
        element:<Products/>
      },
      {
        path: "about",
        element:<About/>
      },
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
