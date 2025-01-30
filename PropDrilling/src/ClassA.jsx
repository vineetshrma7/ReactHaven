import React from "react";
import ClassB from "./ClassB"

function ClassA({name}){
    return(
        <ClassB name={name}/>
    )
}

export default ClassA;