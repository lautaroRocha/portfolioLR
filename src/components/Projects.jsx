import React, {useContext, useRef} from "react";
import { Link } from "react-router-dom";
import FadeIn from "../utilities/FadeIn";
import MinProj from "./MinProj";
import {TextContext} from '../App';
import '../styles/tools.css'

function Projects(){
    const divToScroll = useRef();
    let text = useContext(TextContext);
    let works, sites, pros;

    if(text){
        works = text.projects
        sites = Object.values(works);
        pros = Object.values(sites[2]);
    }
    const scrollDiv = (e) => {
        divToScroll.current.scrollLeft += e.deltaY + 1 ;
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
        <div className="tools-img text-gallery" onWheel={scrollDiv} ref={divToScroll}>
          {pros.map((site, idx) => {
            return(
                <MinProj site={site} key={idx} />
                )})
            }
        </div>}
        <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z"/></svg>
        </Link>
        </div>
        </FadeIn>
        
        </>
    )

}



export default Projects;