
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Head from "./components/Head.jsx";
import Profile from "./components/Profile.jsx";
import Tools from "./components/Tools.jsx";
import './styles/app.css'
import Projects from "./components/Projects.jsx";

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
    fetch("spanish.json")
    .then(response => response.json())
    .then(data => setTextToUse(data))
    }else{
    fetch("english.json")
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
        <Route path="/projects" element={<Projects textToUse={textToUse}/>}></Route>        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
