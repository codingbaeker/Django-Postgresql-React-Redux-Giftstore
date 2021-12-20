import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Layout from "./layout/component";
import './App.css';
import { useSelector } from "react-redux";
import { userTokenSelector } from "./redux/user/selectors";
import { useEffect } from "react";
import Login from "./views/login/component";
import Home from "./views/home/component";
import Gifts from "./views/gifts/component";
import AddGifts from "./views/addGifts/component";
import UpdateGifts from "./views/updateGifts/component";
import DeleteGifts from "./views/deleteGifts/component";

const App = () => {

  const tokenUser = useSelector(userTokenSelector);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    if (tokenUser && tokenUser !== "" && (location.pathname === "/Login" || location.pathname === "/Login/")) {
      navigate("/",{replace: true});
    }
  }, [tokenUser,location, navigate]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Gifts" element={<Gifts/>}/>
          <Route path="/Gifts/addGifts" element={<AddGifts/>}/>
          <Route path="/Gifts/updateGifts" element={<UpdateGifts/>}/>
          <Route path="/Gifts/deleteGifts" element={<DeleteGifts/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
