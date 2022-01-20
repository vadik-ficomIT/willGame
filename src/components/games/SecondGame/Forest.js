import React, { useEffect, useState } from "react";
import { bushWidth, clientHeight, clientWidth } from "../../../state";
import forest1 from '../../../img/game2/forest1.svg'
import forest3 from '../../../img/game2/forest3.svg'

const Fores = (props) => {

    const userGoRef = props.userGoRef;

    const lenBush =  Math.round( (clientWidth*0.5 / (bushWidth)) * (clientHeight / (bushWidth)));


    const [forestArr, setforestArr] = useState([]);

    useEffect(
        ()=>{
            const forestArr = [];
            forestArr.length = lenBush ;
            forestArr.fill(1);
            setforestArr(forestArr);
        },[]
    )
    
    return (
        <div className={props.classN}>
               {   
                forestArr.length && forestArr.map( (el,indx) =>   
                    <img className="bush" key={indx} 
                        style={{margin:`${(userGoRef) ? Math.random()*20  : 12}px` }}
                        width={ `${(userGoRef) ? bushWidth*Math.random()  : bushWidth*0.8}` } 
                        // src={  `${(false)  ? ((Math.random()*100).toFixed(0) / 2) % 2 == 0 ? forest1 : forest3   : forest1}`  }
                        src={ indx % 2 == 0 ? forest1 : forest3    }
                    />
                )
            }
        </div>
    )
}

export default Fores;