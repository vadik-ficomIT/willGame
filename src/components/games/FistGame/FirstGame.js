/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "../../../style/game/firstGame.css"
import ItselfGame from "./ItselfGame";
import logo from "../../../img/logo.jpg";
import ModalAfterGame from ".././ModalAfterGame";

const FirstGame = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [winGame, setWinGame] = useState(false);

    return(
        <div className="first-game">
            <div className="logo">
                <img width={'200px'} alt="willGame" src={logo} />
            </div>
            <div className="game-area">
                <span className="title">
                    Игра в клеточки
                </span>
                <span className="text">
                    Для победы в данной игре Вам нужно отгадать задуманную клетку              
                </span>
                <ItselfGame setWinGame={setWinGame} setOpen={setOpenModal}/>
                {openModal && 
                    <ModalAfterGame winGame={winGame} setOpen={setOpenModal} 
                        open={openModal} setGameNumber={props.setGameNumber}
                    />}
            </div>
        </div>
    )
}

export default FirstGame