const axios = require('axios')

const api = axios.create({
    baseURL : 'https://my-json-server.typicode.com/ann12008/Numer'
})

const getRootofequation = () => api.get('/root_of_equation')
const getMatrix = () => api.get('/matrix')
const getMatrixInterpolation = () => api.get('/interpolation')
const getMatrixRegression = () => api.get('/regression')
const apis = {
    getRootofequation,
    getMatrix,
    getMatrixInterpolation,
    getMatrixRegression
}
export default apis