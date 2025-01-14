import React from "react";

export function SingleProps(props){
    return(
        <h1>satu props:{props.merek}</h1>
    )
}

export function MultiProps(props){
    return(
        <p>
            <h1>prop1:{props.merek}</h1>
            <h1>prop2:{props.model}</h1>
            <h1>prop3:{props.harga}</h1>
        </p>
    )
}

export function JSONProps(props){
    const {mobil} = props
    return(
        <p>
            <h1>prop1:{mobil.merek}</h1>
            <h1>prop2:{mobil.model}</h1>
            <h1>prop3:{mobil.harga}</h1>
        </p>
    )
}

