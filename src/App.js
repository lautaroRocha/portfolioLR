
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Head from "./components/Head.jsx";
import Profile from "./components/Profile.jsx";
import Tools from "./components/Tools.jsx";
import Tre from "./components/Tre.jsx";
import './styles/app.css'



function App() {
  const body = document.querySelector('body');
  body.className="theme-dark"

  const changeTheme = () =>{
      let theme = body.className;
      if(theme === 'theme-dark'){
        body.className="theme-light"
      }else{
        body.className="theme-dark"
      }
  }
  
  return (
    <>
      <BrowserRouter>
      <Head theme={changeTheme}/>
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/tools" element={<Tools />}></Route>   
        <Route path="/tre" element={<Tre />}></Route>        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
