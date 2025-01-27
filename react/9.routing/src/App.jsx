import { createBrowserRouter, RouterProvider } from 'react-router-dom' //latest and recommended method
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import User from './components/User'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar/><Home/></>
    },
    {
      path: "/login",
      element: <><NavBar/><Login/></>
    },
    {
      path: "/about",
      element: <><NavBar/><About/></>
    },
    {
      path:"/user/:username",
      element: <><NavBar/><User/></>
    }
  ])

  return (
    <>
    
    <RouterProvider router={router}/>
    {/* <div>Hello</div> this prints on every page */}
    
    
    </>
  )
}

export default App
