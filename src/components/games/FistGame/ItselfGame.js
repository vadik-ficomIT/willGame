import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const ItselfGame = (props) => {

    const [arrCels, setArrCels] = useState([]);
    const [enabled, setEnabled] = useState(false);


    useEffect(
        ()=>{
            let arrCelsTemp = [];
            for( let i = 0; i < 10; i++ ){
                arrCelsTemp[i]= (Math.random() < 0.7 ) ? true : false ;
            }
            setArrCels(arrCelsTemp)
        },[]
    )

    return(
        <div className="game cells">
            {
                arrCels.map( (el, indx )=> 
                    <Cell key={indx} win={el} enabled={enabled} setEnabled={setEnabled}/>
                )
            }
        </div>
    )
}

export default ItselfGame;