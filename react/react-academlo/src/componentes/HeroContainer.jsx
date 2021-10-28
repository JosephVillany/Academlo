import React from "react";

import { Children } from "react"


const HeroContainer = ({children}) =>{
    console.log (Children);
    return <div className="hero-container">{children}</div>;
}

export default HeroContainer;