import React, { useState } from "react";
import ItselfGame2 from "./ItselfGame2";
import "../../../style/game/secondGames.css"
import ModalBeforeGame from "../ModalBeforeGame";

const SecondGame = (props) =>{

    const [openModalBefore, setopenModalBefore] = useState(true)

    return(
        <div className="second-game">
            <ItselfGame2 beginGame = {!openModalBefore}/>
            <ModalBeforeGame open={openModalBefore} setOpen={setopenModalBefore} />
        </div>
    )
}

export default SecondGame;