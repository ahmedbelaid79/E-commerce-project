import http from "./AxiosContext" 

const create = (data) => {
    return http.post("/products/create",data) //to execute the register function in the backend
}

const getall = () => {
    return http.get("/products/getall") //to execute the register function in the backend
}

const getbyid = (id)=>{
    return http.get(`/products/getbyid/${id}`)
}


const remove = (id)=>{
    return http.delete(`/products/delete/${id}`)
}

const update = (id,data)=>{
    return http.put(`/products/update/${id}`,data)
}

const getbyname = (refproduct)=>{
    return http.put(`/products/getbyname/${refproduct}`)
}



export default {
    create,
    getall,
    getbyid,
    remove,
    update,
    getbyname
}