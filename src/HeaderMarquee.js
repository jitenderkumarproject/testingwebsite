import React from 'react'
import Marquee from "react-fast-marquee";
import './CSS/marquee.scss'

function HeaderMarquee() {
    return (
        <Marquee className='marquee'>
            I can be a React component, multiple React components, or just some text.
        </Marquee>
    )
}

export default HeaderMarquee
