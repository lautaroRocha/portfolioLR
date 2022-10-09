import React, {useContext} from "react";
import {TextContext} from '../App.js'
import '../styles/project.css';

function Project(){

    let params = new URLSearchParams(document.location.search)
    let title = params.get('title')

    let text = useContext(TextContext);
    let works, sites, pros, project;

    if(text){
        works = text.projects
       sites = Object.values(works);
       pros = Object.values(sites[2]);
       project = pros.find(site => site.title === title);
       console.log(project.techs)
    }



    return(
        <>
        <div className="container">
        { text &&
<>
            <h2 className="project project-title">{project.title}</h2>
            <div className="project-links">
                <a target="blank" href={project.link}>DEMO</a>
                <a target="blank" href={project.repo}>CODE</a>
            </div>
            <p className="project project-brief">{project.brief}</p>
            <img src={project.snapshot} alt="Picture of the website" className="project-snap"/> 
            </>  
        }   
</div>
        
        </>
    )
}

export default Project;