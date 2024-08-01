import React from 'react'
import Marquee from "react-fast-marquee";

function HeaderMarquee() {
    return (
        <Marquee style={{ backgroundColor: 'lightblue', padding: '10px' }}>
            I can be a React component, multiple React components, or just some text.
        </Marquee>
    )
}

export default HeaderMarquee
