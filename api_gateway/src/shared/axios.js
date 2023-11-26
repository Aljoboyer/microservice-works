const axios = require("axios");

const httpService = (basUrl) => {
    const instanse = axios.create({
        baseURL: basUrl,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    instanse.interceptors.request.use(
        (config) => {
            return config
        },
        (error) => {
            return error
        }
    )

    instanse.interceptors.response.use(
        (response) => {
            return response.data
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    return instanse
}

const AuthService = httpService(process.env.AUTH_SERVICE_URL)
const CoreService = httpService(process.env.CORE_SERVICE_URL)

module.exports = {
    httpService,
    AuthService,
    CoreService
 } 