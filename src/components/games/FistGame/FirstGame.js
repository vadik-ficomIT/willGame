/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../../../style/game/firstGame.css"
import ItselfGame from "./ItselfGame";
import logo from "../../../img/logo.jpg";

const FirstGame = () => {
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
                    Для победы в данной игре вам нужно вам нужно отгодавть выигрышную клетку              
                </span>
                <ItselfGame/>
            </div>
        </div>
    )
}

export default FirstGame