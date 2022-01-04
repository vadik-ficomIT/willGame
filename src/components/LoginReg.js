/* eslint-disable no-unused-vars */
import React, {  useState } from 'react';
import { StyledLoginRegConteiner } from '../style/StyleLoginReg';
import '../style/LoginReg.css'
import { IonButton, IonInput, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import { addEmailBase, getCode, sendEmail, singApServer } from '../functionAxios';
import { useAtom } from 'jotai';
import { perEmailGL, tokenGL } from '../state';
import { useHistory } from 'react-router';
import logo from "../img/logo.jpg";


const LoginReg = (props) => {
    const [auntification, setAuntification ] = useState('false');
    const [step, setStep ] = useState(0);
    const [verification, setVerification] = useState(['', '', '', '']);
    const [ verificationCode, setVerificationCode] = useState('11113');
    const [thereСodeCMC, seThereСodeCMC] = useState(false);
    const [statusCodeCMC, setStatusCodeCMC] = useState(false);
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');
    const [perEmail, setPerEmail] = useAtom(perEmailGL);
    const [token, setToken] = useAtom(tokenGL);
    const [disableButton, setDisableButton] = useState(false);
    const history = useHistory();

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
            // eslint-disable-next-line eqeqeq
            if(codeCMCString == verificationCode){
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

    const sendCode = () => {
        getCode()
        .then(
            (e)=> {
                console.log(e);
                setVerificationCode(e.data)
                setStep(1);
                setDisableButton(true)
                setTimeout(()=>setDisableButton(false), 20*1000)
            }
        ).catch(
            (e)=> console.log('eror ')
        )
        seThereСodeCMC(false)
        setVerification(['','','',''])
    }

    function singAp() {
        singApServer(perEmail,password)
        .then(
            (e)=> {
               if (e.data){
                setToken('token');
                history.push('games')
               }else{
                alert('Неверный логин и/или пароль')
               }
            }
        ).catch(
            (e)=> console.log('eror ')
        )
    }

    function Login() {
        sendEmail(perEmail)
        .then(
            (e)=> {
                if (e.data){
                    if(password === repPassword){
                        sendCode()
                    }else{
                        setRepPassword('')
                        setPassword('')
                    }
                }else{
                    alert('Пользователь  с таким email уже существует');
                }
            }
        ).catch(
            (e)=> console.log('eror ')
        )
    }

    return (
        <div className="login-reg">
            <div className="logo  logo-abs">
                <img width={'200px'} alt="willGame" src={logo} />
            </div>
            <StyledLoginRegConteiner>
                <div className={'main-conteiner'}>
                    {
                        (step === 0) 
                        ?
                        <div>
                            <header className={`header-change`}>
                                <IonSegment value={auntification}  onIonChange={(e)=>setAuntification(e.detail.value)}>
                                    <IonSegmentButton value={'true'}>
                                        <IonLabel>Вход</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value={'false'}>
                                        <IonLabel>Регистрация</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>
                            </header>
                            <form
                                onSubmit={  (e) => {
                                    // ;
                                    e.preventDefault();
                                    (auntification === 'true') ? singAp() : Login()
                                    
                                   
                                }}
                            >
                            {
                                (auntification === 'true')
                                ? 
                                    <div  className="main-content main-content-log">
                                        <div className="inputs">
                                            <IonInput placeholder={'Введите email'} type={'email'}
                                                 onIonBlur={(e)=>setPerEmail(e.target.value)}   required={true}
                                            />
                                            <IonInput placeholder={'Введите пароль'} type={'password'} 
                                                onIonBlur={(e)=>setPassword(e.target.value)} required={true}
                                            />
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
                                    <IonButton type={"submit"} expand="block" >Регистрация</IonButton>
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
                                    onSubmit={ async(evnForm) => {
                                        evnForm.preventDefault();
                                        setVerification(['', '', '', '']);
                                        addEmailBase(perEmail, password)
                                        .then(
                                            (e)=> {
                                                console.log(e.data);
                                                console.log(perEmail);
                                                if (e.data){
                                                    localStorage.setItem('token', 'yes' );
                                                    setToken('token');
                                                    history.push('games')
                                                }else{
                                                    alert('Пользователь  с таким email уже существует');
                                                }
                                            }
                                        ).catch(
                                            (e)=> console.log('eror ')
                                        )
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
                                                    : sendCode
                                                }
                                            >
                                                { statusCodeCMC ? 'Код верный' :`Неверный код. Попробуйте ещё раз`}
                                            </span>
                                        }   
                                    </div>
                                    {
                                        statusCodeCMC 
                                        ?  <IonButton type={'submit'} expand="block">Вход</IonButton>
                                        :  <IonButton disabled={disableButton} onClick={sendCode}  expand="block">выслать ещё раз</IonButton>

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