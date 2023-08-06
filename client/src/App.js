import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
{
path: "/",
element: <Home />,
},
{
  path: "/profile/:username",
  element: <Profile />
},
{
  path:"/register",
  element:<Register />
},
{
  path:"/login",
  element:<Login />
}
]);



function App() {
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
