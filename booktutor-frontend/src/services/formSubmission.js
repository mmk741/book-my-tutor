import axios from "axios"

const postFormData=(data)=>{
    return axios.post("http://localhost:8080/api/submit-form/",data)
}

export {postFormData}