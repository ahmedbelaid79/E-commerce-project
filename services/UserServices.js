import http from "./AxiosContext" 

const register = (data) => {
    return http.post("/client/create",data) //to execute the register function in the backend
}

const getall = () => {
    return http.get("/client/getall") //to execute the register function in the backend
}

const getbyid = (id)=>{
    return http.get(`/client/getbyid/${id}`)
}


const remove = (id)=>{
    return http.delete(`/client/delete/${id}`)
}

const update = (id,data)=>{
    return http.put(`/client/update/${id}`,data)
}

const getbyname = (firstname)=>{
    return http.getbyname(`/client/getbyname/${firstname}`)
}

export default {
    register,
    getall,
    getbyid,
    remove,
    update,
    getbyname
}