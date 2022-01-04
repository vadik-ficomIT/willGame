/* eslint-disable react-hooks/exhaustive-deps */
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { perEmailGL, tokenGL } from './state';
import { useEffect } from 'react';
import GamePage from './pages/GamePage';

import './style/main.css';
import { useDidUpdateEffect } from './hooks/useDidUpdateEffect';

 const AppWrapper = styled.div`
  width:100vw;
  height:100vh;
  background-color:#000;
`


const App = () => {
  const [token, setToken] = useAtom(tokenGL);
  const [perEmail, setPerEmail] = useAtom(perEmailGL);

  useEffect(
    ()=>{
      setPerEmail(localStorage.getItem('perEmail') || '' )
    },[]
  )

  useEffect(
    ()=>{
      if(token){
        localStorage.setItem('token', token)
      }else{
        setToken(localStorage.getItem('token'))
        localStorage.removeItem('token');
      }
    },[token]
  )

  useDidUpdateEffect(
    ()=>{
      localStorage.setItem('perEmail',perEmail);
    },[perEmail]
  )


  return(
  <AppWrapper>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
        <Redirect to="/home" />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/games">
            <GamePage />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </AppWrapper>
)};

export default App;
