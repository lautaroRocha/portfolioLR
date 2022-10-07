
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Head from "./components/Head.jsx";
import Profile from "./components/Profile.jsx";
import Tools from "./components/Tools.jsx";
import Tre from "./components/Tre.jsx";
import './styles/app.css'

function App() {

  const [language, setLanguage] = useState('español');
  const [textToUse, setTextToUse] = useState()
  const body = document.querySelector('body');
  body.className="theme-dark"
  
//set color theme 
  const changeTheme = () =>{
      let theme = body.className;
      if(theme === 'theme-dark'){
        body.className="theme-light"
      }else{
        body.className="theme-dark"
      }
  }
  //set language of the app
  const changeLang = () =>{
    if(language === 'español'){
      setLanguage('english')
    }else{
      setLanguage('español')
    }
  }
//get the text in the selected language
  useEffect(() =>{
    if(language === 'español'){
    fetch('https://myjson.dit.upm.es/api/bins/3k6s')
    .then(response => response.json())
    .then(data => setTextToUse(data))
    }else{
    fetch('https://myjson.dit.upm.es/api/bins/3rwk')
    .then(response => response.json())
    .then(data => setTextToUse(data))
    }
  }, [language])

  

  return (
    <>
      <BrowserRouter >
      <Head theme={changeTheme} lang={changeLang}/>
      <Routes>
        <Route path="/" element={<Profile textToUse={textToUse} />}></Route>
        <Route path="/tools" element={<Tools textToUse={textToUse} />}></Route>   
        <Route path="/tre" element={<Tre />}></Route>        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
