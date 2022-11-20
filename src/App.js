
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, {useState, useEffect, createContext} from "react";

import Head from "./components/Head.jsx";
import Profile from "./components/Profile.jsx";
import Tools from "./components/Tools.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Project from "./components/Project.jsx";

import './styles/app.css'


export const TextContext = createContext();


function App() {

  const [language, setLanguage] = useState('spanish');
  const [textToUse, setTextToUse] = useState();
  const [theme, setTheme] = useState('dark');

  
  const body = document.querySelector('body');
  
//set color theme 
useEffect( () =>{
  body.className = 'theme-'+theme;
}, [theme]);
  
const changeTheme = () =>{
      theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

//get the text in the selected language
  
const getSpanish = () =>{
  fetch("spanish.json")
  .then(response => response.json())
  .then(data => setTextToUse(data))
}
const getEnglish = () => {
    fetch("english.json")
    .then(response => response.json())
    .then(data => setTextToUse(data))
  }
const changeLang = () =>{
  language === "spanish" ? setLanguage('english') : setLanguage('spanish')
}

useEffect(() =>{
  language === 'spanish' ? getSpanish() : getEnglish();
  }, [language])

  return (
    <>
      <BrowserRouter >
        <Head theme={changeTheme} lang={changeLang}/>
      <TextContext.Provider value={textToUse}>
        <Routes>
          <Route path="/" element={<Profile language={language}/>}></Route>
          <Route path="/tools" element={<Tools />}></Route>   
          <Route path="/projects" element={<Projects/>}></Route> 
          <Route path="/project" element={<Project  />}></Route>
          <Route path="/contact" element={<Contact  />}></Route>
        </Routes>
    </TextContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
