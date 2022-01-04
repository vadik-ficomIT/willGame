import {  IonPage } from '@ionic/react';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import FirstGame from '../components/games/FistGame/FirstGame';
import { checkGame } from '../functionAxios';
import { perEmailGL } from '../state';

const GamePage = () => {

  const history = useHistory();
  const [perEmail, setPerEmail] = useAtom(perEmailGL);
  const [gameNumber, setGameNumber] = useState(undefined);

  useEffect(
    ()=>{
      if (!localStorage.getItem('token')){
        history.push('/')
      }else{
        console.log(perEmail);
        checkGame(perEmail)    
        .then(
          (e)=> {
            setGameNumber(e.data)
          }
        ).catch(
          ()=> alert('Неизвестная ошибка перезагрузите страницу')
        )
      }
    },[]
  )

  return (
    <IonPage>
        {
          gameNumber &&
          <>
            {gameNumber == 1 && <FirstGame/>}
          </>
        }
    </IonPage>
  );
};

export default GamePage;
