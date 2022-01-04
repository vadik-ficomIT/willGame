import axios from "axios";

const URL = 'http://willgameserver' ;
// const URL = 'http://vadikiwwwo.temp.swtest.ru/server' ;

// export const test = (emailPerson) => {
// axios({
//         method: 'post',
//         url: URL,
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         data: {
//             email: emailPerson
//         }
//     }).then(  async (response) => {
//         console.log(response.data);
//     })
//     .catch( async (error) => {
//     console.log(error);
//     })
// }

export async function sendEmail(emailPerson){
    let response = await axios({
            method: 'post',
            url: `${URL}/api/sendCheckEmail.php`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                email: emailPerson
            }
        })
    return response;
}

export async function addEmailBase(emailPerson , passwordPerson){
    let response = await axios({
            method: 'post',
            url: `${URL}/api/add/addEmailBase.php`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                email: emailPerson,
                password: passwordPerson
            }
        })
    return response;
}

export async function getCode(){
    let response = await axios({
            method: 'post',
            url: `${URL}/api/sendCode.php`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
    return response;
}

export async function singApServer(emailPerson, passwordPerson){
    let response = await axios({
            method: 'post',
            url: `${URL}/api/singAp.php`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                email: emailPerson,
                password: passwordPerson
            }
        })
    return response;
}

export async function checkGame(emailPerson){
    let response = await axios({
            method: 'post',
            url: `${URL}/api/check/checkGame.php`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                email: emailPerson,
            }
        })
    return response;
}

export async function changePoint(emailPerson, point){
    let response = await axios({
            method: 'post',
            url: `${URL}/api/change/changePoint.php`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                email: emailPerson,
                point: point,
            }
        })
    return response;
}

export async function changeGame(emailPerson, step){
    let response = await axios({
            method: 'post',
            url: `${URL}/api/change/changeGame.php`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                email: emailPerson,
                step: step,
            }
        })
    return response;
}