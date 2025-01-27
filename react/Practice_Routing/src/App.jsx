import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./Components/About"
import Login from "./Components/Login"


function App() {
  const router  = createBrowserRouter([
    {
      path:"/",
      element: <><NavBar/><Home/></>
    },
    {
      path:"/About",
      element: <><NavBar/><About/></>
    },
    {
      path: "/Login",
      element: <><NavBar/><Login/></>
    }

  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
