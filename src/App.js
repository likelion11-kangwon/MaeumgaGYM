import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Help from "./pages/Help"
import Taxi from "./pages/Taxi"
import Report from './pages/Report';
import Notice from './pages/Notice';
import Chat from './pages/Chat';
import Login from "./pages/Login";
import Mypage from './pages/Mypage';

function App() {
  return (
    <BrowserRouter>
          <div className="App">
          <Header />
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/Help" element={<Help />}/>
            <Route path="/Taxi" element={<Taxi />}/>
            <Route path="/Report" element={<Report/>}/>
            <Route path="/Notice" element={<Notice/>}/>
            <Route path="/Chat" element={<Chat/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Mypage" element={<Mypage/>}/>
          </Routes>   
        </div>
    </BrowserRouter>

  );
}

export default App; 