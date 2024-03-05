//aqui ficará o "component" da Api, que se chamara "api"
import axios from 'axios';
 
const api = axios.create({
    baseURL: 'https://metadoctors.com.br/wp-json/buddyboss-app/auth/v1/jwt'
})
 
export default api