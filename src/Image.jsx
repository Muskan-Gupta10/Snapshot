import React from "react";
export default function Image(props){
    return (
        <li>
        <img src={props.value} height='200px' />
        </li>
    )
}