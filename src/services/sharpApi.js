import axios from 'axios';

const accountID = "CB98CE5EB97FA3A3B02197EB398D84DF";
const secretKey = "9BF5E58568ABFD65929EC0A9ED197E7C"
 
const sharpApi = axios.create({
    baseURL: `https://api.sharpspring.com/pubapi/v1/?accountID=${accountID}&secretKey=${secretKey}`
})
 
export default sharpApi