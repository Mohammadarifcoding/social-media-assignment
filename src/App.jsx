import { Route, Routes } from "react-router";
import AuthLayout from "./components/Layout/AuthLayout";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";


const App = () => {
  return (
  <Routes>

  <Route path="/" element={<AuthLayout />}>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Route>

  
</Routes>

  );
};

export default App;
