import React, {useContext} from "react";
import { Link } from "react-router-dom";
import FadeIn from "../utilities/FadeIn";
import '../styles/profile.css'
import Name from "../utilities/Name";
import {TextContext} from '../App.js'




function Profile(){

    let text = useContext(TextContext);
    let buttons; 

    if(text){
        buttons = text.profile.buttons;
    }
    
    return(
        <>
        <FadeIn>
        <div className="profile">
                {<Name className="profile-name" />}
                {text && 
                <div className="profile-btns">
                    <Link to="/">
                        <button data-text={buttons[0]}>{buttons[0]}</button>
                    </Link>
                        <button data-text={buttons[1]} >{buttons[1]}</button>
                    <Link to="/tools">
                        <button data-text={buttons[2]} >{buttons[2]}</button>
                    </Link>
                    <Link to="/projects">
                        <button data-text={text.profile.buttons[3]} >{text.profile.buttons[3]}</button>
                    </Link>
                </div>}
        </div>
        </FadeIn>
        </>
    )
}

export default Profile;