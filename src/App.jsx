import { Route, Routes } from "react-router";
import AuthLayout from "./components/Layout/AuthLayout";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/Home/Home";
import MainLayout from "./components/Layout/MainLayout";


const App = () => {
  return (
  <Routes >
    <Route element={<MainLayout />}>

 <Route path="/" element={<Home />} />
    </Route>
   
  <Route element={<AuthLayout />}>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Route>

  
</Routes>

  );
};

export default App;
