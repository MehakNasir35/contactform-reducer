import { useQuery, useMutation } from '@tanstack/react-query'
import axios from "axios";
import { useQueryClient } from '@tanstack/react-query'


axios.defaults.withCredentials = true;

//login user
const useLogin = () => {
    return useMutation({
        mutationFn: (data) => {
            return axios
                .post(`http://localhost:5000/login`, data)
                .then((res) => res.data)
                
        },
        onSuccess: async (res) => {
            console.log(res)
        }, onSettled: (res) => {

        }
    })
}

export {
    useLogin
}