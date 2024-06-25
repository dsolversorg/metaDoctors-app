import axios from 'axios';
 
const registerCrm = axios.create({
    baseURL: 'https://metadoctors.com.br/app/wp-json/crm-verification/v1'
})
 
export default registerCrm