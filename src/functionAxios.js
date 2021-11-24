import axios from "axios";

const URL = 'http://willgameserver/' ;

export const sendEmail = (emailPerson) => {
axios({
        method: 'post',
        url: URL,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
            email: emailPerson
        }
    }).then(  async (response) => {
        console.log(response.data);
    })
    .catch( async (error) => {
    console.log(error);
    })
}