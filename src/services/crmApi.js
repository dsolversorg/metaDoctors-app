import axios from 'axios';
 
const crmApi = axios.create({
    baseURL: 'https://fa-eastus2-solvers-solversapi.azurewebsites.net/api/v1/'
})
 
export default crmApi