import React, {useContext} from "react";
import { Link } from "react-router-dom";
import FadeIn from "../utilities/FadeIn";
import '../styles/profile.css'
import Name from "../utilities/Name";
import ScrollableComponent from "../utilities/ScrollableComponent";
import {TextContext} from '../App.js'



function Profile(props){

    let text = useContext(TextContext);
    let buttons; 

    if(text){
        buttons = text.profile.buttons;
    }
    
    return(
        <>
        <FadeIn>
        <div className="profile">
                {text && <ScrollableComponent text={text}/>}
                {text && 
                <div className="profile-btns">
                    <Link to="/contact">
                        <button data-text={buttons[0]}>{buttons[0]}</button>
                    </Link>
                    {/* link de descarga de CV */}
                    {props.language === "spanish" ? 
                    <a href="CV_lautaroRocha.pdf" download="CV_lautaroRocha">
                        <button data-text={buttons[1]} >{buttons[1]}</button>
                    </a> :
                    <a href="CV_lautaroRocha_ENG.pdf" download="CV_lautaroRocha_ENG">
                    <button data-text={buttons[1]} >{buttons[1]}</button>
                    </a> 
                    }
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