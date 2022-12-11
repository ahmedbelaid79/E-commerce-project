import http from "./AxiosContext" 

const login = (data) => {
    return http.post("auth/login",data)
}

export default {
    login
}