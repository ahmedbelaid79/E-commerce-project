import http from "./AxiosContext" 

const getall = ()=>{
    return http.get("/subcateg/getall/")
}


export default {
    getall
}