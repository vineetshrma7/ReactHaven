import React from "react";
import ClassC from "./ClassC";

function ClassB({name}){
    return(
        <ClassC name={name}/>
    )
}

export default ClassB;