import React, {useEffect} from "react";
import FadeIn from "../utilities/FadeIn";
import '../styles/profile.css'
import Name from "../utilities/name";


function Profile(props){

    let text = props.textToUse

    return(
        <>
        <FadeIn>
        <div className="profile">
                {<Name className="profile-name" />}
               
                {text && 
                <div className="profile-btns">
                    <button>{text.profile.buttons[0]}</button>
                    <button>{text.profile.buttons[1]}</button>
                    <button>{text.profile.buttons[2]}</button>
                    <button>{text.profile.buttons[3]}</button>

                </div>}
        </div>
        </FadeIn>
        </>
    )
}

export default Profile;