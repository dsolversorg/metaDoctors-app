//aqui ficará o "component" da Api, que se chamara "api"
import axios from 'axios';
 
const api = axios.create({
    baseURL: 'https://metadoctors.com.br/app/wp-json/buddyboss-app/'
})
 
export default api