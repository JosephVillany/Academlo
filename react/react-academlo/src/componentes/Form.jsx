import React from "react";

//Styles

import ""

const Form = ({handleChange, HandleSearchHero}) =>{
    return(
        <form action="" onSubmit={e => HandleSearchHero(e)} >
            <input 
            type="text"
            placeholder="Name"
            onChange={({target})=> handleChange(target)}
            required={true} 
             />

        </form>
    )
}

export default Form;