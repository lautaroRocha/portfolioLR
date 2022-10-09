import React from "react";
import FadeIn from "../utilities/FadeIn";
import MinProj from "./MinProj";

import '../styles/tools.css'

function Projects(props){

    let text = props.textToUse;
    let works, sites, pros;

    if(text){
        works = text.projects
       sites = Object.values(works);
       pros = Object.values(sites[2]);
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
        {pros &&
        <div className="tools-img">
            {console.log(pros)}
          {pros.map((site, idx) => {
            return(
                <MinProj site={site} key={idx} />
                )})
            }
        </div>}
        </div>
        </FadeIn>
        </>
    )

}



export default Projects;