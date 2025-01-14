import React from "react";
import { MultiProps, SingleProps,JSONProps } from "./components/Props2";

class Appv2 extends React.Component{
    data = {
        mobil:{
            merek:'toyota',
            model:'fortuner',
            harga:100
        }
    }

    render(){
        return(
            <>
            <SingleProps merek="honda"/>
            <MultiProps merek="honda" model="civic" harga="100jt"/>
            <JSONProps mobil={this.data.mobil}/>
            </>
        )
    }
}

export default Appv2