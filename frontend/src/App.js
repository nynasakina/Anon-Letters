import Topbar from "./components/topbar/Topbar.js";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home.js";
import Register from "./pages/register/Register.js";
import Login from "./pages/login/Login.js";
import Write from "./pages/write/Write.js";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import { useContext } from "react";
import { Context } from "./context/Context.js";
function App() {
  const {user} = useContext(Context)
  return (
    <>
      <Topbar></Topbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single/>} />

      </Routes>
    </>
  );
}
export default App;
