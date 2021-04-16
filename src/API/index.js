const axios = require('axios')

const api = axios.create({
    baseURL : 'https://my-json-server.typicode.com/ann12008/Numer'
})

const getRootofequation = () => api.get('/root_of_equation')
const getMatrix = () => api.get('/matrix')
const apis = {
    getRootofequation,
    getMatrix
}
export default apis