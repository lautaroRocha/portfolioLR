import React, {useContext} from "react";
import { Link } from "react-router-dom";
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
            <div className="project-window">
            <p className="project project-brief">{project.brief}</p>
            <img src={project.snapshot} alt="Picture of the website" className="project-snap"/> 
            </div>
            <Link to="/projects">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z"/></svg>
             </Link>
        </>  
        }   
</div>
        
        </>
    )
}

export default Project;