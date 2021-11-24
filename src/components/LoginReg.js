import React, { useEffect, useState } from 'react';
import { StyledLoginRegConteiner } from '../style/StyleLoginReg';
import '../style/LoginReg.css'
import axios from 'axios';
import { IonButton, IonInput, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import { sendEmail } from '../functionAxios';
const LoginReg = (props) => {
    const [auntification, setAuntification ] = useState('false');
    const [step, setStep ] = useState(0);
    const [verification, setVerification] = useState(['', '', '', '']);
    const [ verificationCode, setVerificationCode] = useState('1111');
    const [thereСodeCMC, seThereСodeCMC] = useState(false);
    const [statusCodeCMC, setStatusCodeCMC] = useState(false);
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');
    const [perEmail, setPerEmail] = useState('');
    const [token, setToken] = useState(false);
    // const [token, setToken] = useAtom(tokenGL);

    const personRegister = () => {

    }

    function changeInput(i, e) {
        function filterRange(arr, index, el) {
            let array = arr;
            array.splice(index, 1, el);
            return array;
        }
        if (e && e.length === 1) {
            if (i < 3) {
            setVerification(filterRange(verification, i, e))
            document.getElementsByTagName('input')[i + 1].focus();
            };
            if (e && i === 3) {
            setVerification(filterRange(verification, i, e));
            seThereСodeCMC(true)
            let codeCMCString = verification.join('');
            if(codeCMCString === verificationCode){
                setStatusCodeCMC(true)
            }else if (statusCodeCMC === true){
                setStatusCodeCMC(false)
            }
            document.getElementsByTagName('input')[3].blur();
            }
        } 
        if (e && e.length > 1) {
            setVerification([...e]);
        }
    
    }

    // useEffect(()=>{
    //     axios({
    //         method: 'post',
    //         url:'http://willgameserver/',
    //         // headers: {
    //         //     'Access-Control-Allow-Origin': '*',
    //         //     'Content-Type': 'application/json',
    //         //     withCredentials: true,
    //         //     mode: 'no-cors',
    //         //   }   
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //         data: {
    //             ID: 'Fred',
    //             email: 'd'
    //         }

    //         // headers:'access-control-allow-origin'
    //     }).then(  async (response) => {
    //         console.log(response.data);
    //       })
    //       .catch( async (error) => {
    //         console.log(error);
    //       })
    // },[])
    return (
        <div className="login-reg">
            <StyledLoginRegConteiner>
                <div className={'main-conteiner'}>
                    {
                        (step === 0) 
                        ?
                        <div>
                            <header className={`header-change`}>
                                <IonSegment  onIonChange={(e)=>setAuntification(e.detail.value)}>
                                <IonSegmentButton value={'true'}>
                                    <IonLabel>Вход</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value={'false'}>
                                    <IonLabel>Регистрация</IonLabel>
                                </IonSegmentButton>
                                </IonSegment>
                            </header>
                            <form
                                onSubmit={ (e) => {
                                    e.preventDefault();
                                    if(password === repPassword){
                                        sendEmail(perEmail);
                                        setStep(1)
                                    }else{
                                        setRepPassword('')
                                        setPassword('')
                                    }
                                }}
                            >
                            {
                                (auntification === 'true')
                                ? 
                                    <div  className="main-content main-content-log">
                                        <div className="inputs">
                                        <IonInput placeholder={'Введите email'}  required={true}/>
                                        <IonInput placeholder={'Введите пароль'}  required={true}/>
                                        </div>
                                        <IonButton expand="block">Вход</IonButton>
                                    </div>
                                :     
                                <div className="main-content main-content-reg">
                                    <div className="inputs">
                                    <IonInput  value={perEmail} onIonBlur={(e)=>setPerEmail(e.target.value)} placeholder={'Введите email'}  type={'email'} required={true}/>
                                    <IonInput value={password} onIonBlur={(e)=>setPassword(e.target.value)} type={'password'} placeholder={'Введите пароль'} required={true} />
                                    <IonInput value={repPassword} onIonBlur={(e)=>setRepPassword(e.target.value)}  type={'password'} placeholder={'Повторите пароль'}  required={true}/>
                                    </div>
                                    <IonButton type={"submit"} expand="block" 
                                        onClick={personRegister}
                                    >Регистрация</IonButton>
                                </div> 
                            }
                            </form>
                        </div>
                        :
                        <div>
                            <header className={`header-change active`}>
                                Регистрация
                            </header>
                            <div  className="main-content main-content-log">
                                <div className="code">
                                <form 
                                    onSubmit={ async(e) => {
                                        e.preventDefault();
                                        setVerification(['', '', '', '']);
                                        localStorage.setItem('token', 'yes' );
                                        setToken('token');
                                    }}
                                >
                                    <span className={'to-correct-number'} onClick={()=>setStep(0)} > Назад</span>
                                    <div className="verify-input-container flex">
                                        <IonInput
                                            type="number"
                                            value={verification[0]}
                                            onIonChange={e => { changeInput(0, e.detail.value) }}
                                        />

                                        <IonInput
                                            type="number"
                                            value={[...verification][1]}
                                            onIonChange={e => { changeInput(1, e.detail.value) }}
                                        />

                                        <IonInput
                                            type="number"
                                            value={[...verification][2]}
                                            onIonChange={e => { changeInput(2, e.detail.value) }}
                                        />
                                        
                                        <IonInput
                                            type="number"
                                            value={[...verification][3]}
                                            onIonChange={e => { changeInput(3, e.detail.value) }}
                                        />
                                    </div>
                                    <div className={'checkCode'}>
                                        { thereСodeCMC &&
                                            <span 
                                                className={` ${statusCodeCMC ? 'goodCodeCMC' : 'badCodeCMC'}`}
                                                onClick={statusCodeCMC ? null 
                                                    : ()=> {
                                                        setVerification(['', '', '', '']);
                                                        seThereСodeCMC(false)
                                                    } 
                                                }
                                            >
                                                { statusCodeCMC ? 'Код верный' :`Неверный код. Попробуйте ещё раз`}
                                            </span>
                                        }   
                                    </div>
                                    {
                                        statusCodeCMC 
                                        ?  <IonButton type={'submit'} expand="block">Вход</IonButton>
                                        :  <IonButton  expand="block">выслать ещё раз</IonButton>

                                    }
                                </form>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </StyledLoginRegConteiner>
        </div>

    )
}

export default LoginReg;