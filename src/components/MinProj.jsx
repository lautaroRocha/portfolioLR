import React from "react";
import { Link } from "react-router-dom";
import '../styles/mins.css'
function MinProj(props){

    let site = props.site;

    return(
        <>
        <Link className="min" to={`/project?title=${site.title}`}>
        <span className="min-name">{site.title}</span>
        </Link>
        </>
    )
}

export default MinProj;

