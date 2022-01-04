import React, { useState } from "react";
import goodSrc from "../../../img/game1/tick.svg";
import bedSrc from "../../../img/game1/cross.svg";
import { changeGame, changePoint } from "../../../functionAxios";
import { useAtom } from "jotai";
import { perEmailGL } from "../../../state";

const Cell = (props) => {
    const [current, setCurrent] = useState(false);
    const [point, setPoint] = useState((props.win) ? 100 : 0)
    const [perEmail, setPerEmail] = useAtom(perEmailGL);


    const clickCell = () => {
        props.setEnabled(true);
        setCurrent(true);
        changePoint(perEmail, point)
        .then((e)=>{
            console.log(e);
        })
        .catch(
            () => alert('Неизвестная ошибка перезагрузите страницу')
        )
     
        const step = (props.win) ? 1 : 0 ;

        changeGame(perEmail, step)
        .then((e)=>{
            console.log(e);
        })
        .catch(
            () => alert('Неизвестная ошибка перезагрузите страницу')
        )
    }

    return (
        <div className={`${current ? 'current-cell' : ''} cell`}  onClick={clickCell}>
            { ( props.enabled) &&  
                <div>
                    <img alt='cells' src= {(props.win) ? goodSrc : bedSrc}/>
                </div>
            }
        </div>
    )
}

export default Cell;