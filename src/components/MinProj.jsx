import React from "react";
import { Link } from "react-router-dom";
import '../styles/mins.css'


function MinProj(props){

    let site = props.site;

    return(
        <>
        {site &&
        <Link className="min" to={`/project?title=${site.title}`}>
            <span className="min-name">{site.title}</span>
            <img className="min-icon" src={site.icon} alt="" />
        </Link>}
        </>
    )
}

export default MinProj;

