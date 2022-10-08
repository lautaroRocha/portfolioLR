import React from "react";
import FadeIn from "../utilities/FadeIn";
import '../styles/tools.css'

function Projects(props){

    let text = props.textToUse;

    let works;

    let sites = [];

    if(text){
        works = text.projects
       console.log(Object.values(works))
    }

    return(
        <>
        <FadeIn>
        <div className="container">
        {text &&
        <div className="tools-text">
            <h2>{text.projects.head}</h2>
            <p>{text.projects.body}</p>
        </div>}
        {text &&
        <div className="tools-img">
          
        </div>}
        </div>
        </FadeIn>
        </>
    )

}



export default Projects;