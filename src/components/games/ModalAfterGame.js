import { IonButton, IonIcon, IonModal } from "@ionic/react";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { checkGame } from "../../functionAxios";
import { perEmailGL } from "../../state";
import "../../style/game/afterModal.css"
import { sleep } from "../../utils";

const ModalAfterGame = (props) => {

  const [perEmail, setPerEmail] = useAtom(perEmailGL);

  useEffect(
     ()=>{
      checkGame(perEmail)    
      .then(
        async (e)=> {
          await sleep(1000);
          props.setGameNumber(e.data);
        }
      ).catch(
        ()=> alert('Неизвестная ошибка перезагрузите страницу')
      )
    },[]
  )
 
  return ( 
    <IonModal
      className={'modal-after-game'}
      isOpen={props.open}
      onDidDismiss={() => {props.setOpen(false);}}
    >
        <div className="main-content">
          <div className={`title ${props.winGame ? `win` : `loss`}`}>
            {props.winGame ? `Вы выиграли` : `Вы проиграли`}
          </div>
        </div> 
    </IonModal> 
  );
}

export default ModalAfterGame;