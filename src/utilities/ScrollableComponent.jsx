import React from 'react'
import Name from './Name'
import '../styles/scrollabe.css'

function ScrollableComponent(props){

    let text = props.text;
    console.log(text)
    return(
        <div className="scrollable-com">
            <Name />
            <p>{text.profile.me}</p>
        </div>
    )
}

export default ScrollableComponent;