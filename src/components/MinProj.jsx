import React from "react";
import { Link } from "react-router-dom";
import '../styles/mins.css'


function MinProj(props){

    let site = props.site;

    let stack = site.techs;

    return(
        <>
        <Link className="min" to={`/project?title=${site.title}`}>
        <div>
            <span className="min-name">{site.title}</span>
            <img className="min-icon" src={site.icon} alt="" />
        </div>
        </Link>
        </>
    )
}

export default MinProj;

