import {  IonPage } from '@ionic/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import LoginReg from '../components/LoginReg';

const Home = () => {

  const history = useHistory();

  useEffect(
    ()=>{
      if (localStorage.getItem('token')){
        history.push('games')
      }
    },[]
  )

  return (
    <IonPage>
        <LoginReg/>
    </IonPage>
  );
};

export default Home;
