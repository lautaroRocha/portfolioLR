import React from "react";
import { Link } from "react-router-dom";
import '../styles/mins.css'


function MinProj(props){

    let site = props.site;

    let stack = site.techs;

    return(
        <>
        <Link className="min" to={`/project?title=${site.title}`}>
        <span className="min-name">{site.title}</span>
        <div className="min-stack">
        { stack.map((tech, idx) => {
            return(
                <span  key={idx}> {tech} </span>
            )
        })}
        </div>
        </Link>
        </>
    )
}

export default MinProj;

