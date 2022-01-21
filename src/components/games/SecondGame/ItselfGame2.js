import React, { useEffect, useRef, useState } from "react";
import rectRoad from '../../../img/game2/RectangleRoad.svg'
import forest1 from '../../../img/game2/forest1.svg'
import forest3 from '../../../img/game2/forest3.svg'
import trafficLight from '../../../img/game2/trafficLight.svg'
import car from '../../../img/game2/car.svg'
import RectangleTF from '../../../img/game2/RectangleTF.svg'
import RectTF from "./RectTF";
import { useDidUpdateEffect } from "../../../hooks/useDidUpdateEffect";
import { sleep } from "../../../utils";
import Fores from "./Forest";

const ItselfGame2 = (props) =>{
    const clientWidth =  document.documentElement.clientWidth;
    const clientHeight =  document.documentElement.clientHeight;
    
    const roadWidth  = clientWidth*0.01;
    const roadHeight  = clientHeight*0.1;
    const bushWidth  = clientWidth*0.05;

    const roadArr = [0,1,2,3,4,5,6];
   
    const [toogle, setToogle] = useState(false);

    const colorRecRef = useRef('')
    const userGoRef = useRef(false)
    const roadRef = useRef(null)
    const trafLighToogleRef = useRef(false)
    const lineBottomRef = useRef(0)

    const marginLineRoad = clientWidth*0.3 / 8;

    useEffect(
        async () => {
                if(userGoRef.current){
                    if(colorRecRef.current == 'red'){
                        userGoRef.current = false;
                        alert('lose');
                    }
                    var lines = document.querySelectorAll('.line')
                    var bushs = document.querySelectorAll('.bush')

                    lines.forEach((el) => {
                        el.style.top = `${lineBottomRef.current}px`
                    })

                    // bushs.forEach((el) => {
                    //     el.style.top = `${lineBottomRef.current}px`
                    //     console.log( el.style.top);
                    // })

                    lineBottomRef.current+=10;

                    if(lineBottomRef.current > marginLineRoad){
                        lineBottomRef.current = 0
                    }
                }
                await sleep(41);
                setToogle(!toogle);
        },[toogle, userGoRef.current,  colorRecRef.current]
    )

    useEffect(
        ()=>{
            document.addEventListener( 'keydown', ()=>{
                userGoRef.current = true;
            })
            document.addEventListener( 'keyup', ()=>{
                userGoRef.current = false;
            })
        },[]
    )

    useEffect(
        async ()=>{
            if(trafLighToogleRef.current){
                console.log('f');
                trafLighToogleRef.current = false;
                await sleep(Math.random()*1900)
                colorRecRef.current = 'yellow'
                await sleep(Math.random()*700)
                colorRecRef.current = 'red'
                await sleep(Math.random()*1200)
                colorRecRef.current = 'yellow'
                await sleep(Math.random()*500)
                colorRecRef.current = 'green'
                await sleep(Math.random()*500)
                trafLighToogleRef.current = true
            }
        },[trafLighToogleRef.current]
    )

    useDidUpdateEffect(
        async ()=>{
            colorRecRef.current = 'red';
           await sleep(2000);
           colorRecRef.current = 'yellow';
           await sleep(2000);
           colorRecRef.current = 'green';
           trafLighToogleRef.current = true;
        },[props.beginGame]
    )
    

    return(
        <div className="itself-game2">
            <img className="traffic-light" width={clientWidth *0.2} src={trafficLight}/>

            <RectTF width={clientWidth * 0.035} class={colorRecRef.current} />

                <Fores colorRecRef={colorRecRef.current} userGoRef={userGoRef.current} classN={"left-forest"} />
            <div className="road" ref={roadRef}>
                {
                    roadArr.map(el =>   
                         <img  className={'line'} key={el} height={roadHeight} src={rectRoad}/>
                    )
                }
                <img className="car" width={clientWidth*0.06} src={car}/>
            </div>
                <Fores colorRecRef={colorRecRef.current} userGoRef={userGoRef.current}  classN={"right-forest"} />
        </div>
    )
}

export default ItselfGame2;