import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import FadeIn from "../utilities/FadeIn";
import '../styles/profile.css'
import Name from "../utilities/Name";


function Profile(props){

    let text = props.textToUse

    return(
        <>
        <FadeIn>
        <div className="profile">
                {<Name className="profile-name" />}
                {text && 
                <div className="profile-btns">
                    <Link to="/">
                    <button>{text.profile.buttons[0]}</button>
                    </Link>
                    <button>{text.profile.buttons[1]}</button>
                    <Link to="/tools">
                    <button>{text.profile.buttons[2]}</button>
                    </Link>
                    <Link to="/projects">
                    <button>{text.profile.buttons[3]}</button>
                    </Link>

                </div>}
        </div>
        </FadeIn>
        </>
    )
}

export default Profile;