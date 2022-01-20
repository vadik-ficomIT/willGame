import { IonButton, IonIcon, IonModal } from "@ionic/react";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { checkGame } from "../../functionAxios";
import { perEmailGL } from "../../state";
import "../../style/game/afterModal.css"
import { sleep } from "../../utils";

const ModalBeforeGame = (props) => {

  const [perEmail, setPerEmail] = useAtom(perEmailGL);
 
  return ( 
    <IonModal
      className={'modal-after-game'}
      isOpen={props.open}
      onDidDismiss={() => {props.setOpen(false);}}
    >
        <div className="main-content">
          <IonButton onClick={ () =>props.setOpen(false)}>
              начать игру
          </IonButton>
        </div> 
    </IonModal> 
  );
}

export default ModalBeforeGame;