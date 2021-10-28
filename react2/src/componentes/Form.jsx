import React from "react";

const Form = ({handleChange, handleSearchHero}) =>{

    return(
        <form action="">
            <input type="text" 
            placeholder="Name"
            onChange={({target})=> handleChange(target) } 
            required={true}
            />
        </form>
    )
   
}

export default Form; 
