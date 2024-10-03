import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Pages/landing/landing';
const routes=createBrowserRouter([
  {path:"/",element:<Landing/>}
])
export default function App() {
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}