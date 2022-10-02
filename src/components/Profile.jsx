import React from "react";
import FadeIn from "../utilities/FadeIn";
import '../styles/profile.css'
import Name from "../utilities/name";


function Profile(){

    return(
        <>
        <FadeIn>
        <div className="profile">
                {<Name className="profile-name" />}
                <div className="profile-btns">
                    <button>CONTACTAME</button>
                    <button>DESCARGAR CV</button>
                </div>
        </div>
        </FadeIn>
        </>
    )
}

export default Profile;