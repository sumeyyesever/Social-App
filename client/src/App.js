import { useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Context } from "./context/Context";



function App() {
  const {user} = useContext(Context);
   
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate replace to ="/" /> : <Register />} /> 
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
