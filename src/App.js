import SideBar from "./component/SideBar";
import TopBar from "./component/TopBar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User"
import NewUser from "./pages/NewUser"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { useState } from "react";


function App() {
  const [pat, setPat] = useState("");

  const childToParent = (childdata) => {
    setPat(childdata)
  }

  return (
    <Router>
    <TopBar  childToParent={childToParent}  />
    <div className="container">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/data"element={<Users  pat={pat}  />} />
        <Route path="/data/user/:userid" element={<User/>} />
        <Route path="/newuser" element={<NewUser/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
