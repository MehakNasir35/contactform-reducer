import { useQuery, useMutation } from '@tanstack/react-query'
import axios from "axios";
import { useQueryClient } from '@tanstack/react-query'

axios.defaults.withCredentials = true;

//fetch users
const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => 
            axios
                .get(`http://localhost:5000/users`)
                .then((res) => res.data)
        
    })
}

//add user
const useAddUsers = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
                .post('http://localhost:5000/user', data)
        }, onSuccess: async (res) => {
            const newUser = res.data
            await queryClient.cancelQueries({ queryKey: ['users'] })
            const oldUsers = queryClient.getQueryData(['users'])
            queryClient.setQueryData(['users'], (old) => [...old, newUser])
            // Return a context object with the snapshotted value
            return { oldUsers }
        }, onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
    })
}

//get user with id
const useSelectUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
                .get(`http://localhost:5000/user/${data.id}`)
                .then((res) => res.data)
        },
        onSuccess: async (res) => {
            const newUser = queryClient.setQueryData(['users', { id: res.id }], res)
            return newUser
        }, onSettled: (res) => {
            queryClient.invalidateQueries('users', { id: res.id })
        }
    })
}


//edit user
const useEditUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            console.log(data)
            return axios
                .put(`http://localhost:5000/user`, data)
        }, onSuccess: async (res) => {
            return res
        }, onSettled: (res) => {
            // const newUser = res.data
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
    })
}

//delete user
const useDeleteUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            console.log(data)
            return axios
                .delete(`http://localhost:5000/user/${data}`)
        }, onSuccess: async (res) => {
            console.log(res)
            return res
        }, onSettled: (res) => {
            // const newUser = res.data
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
    })
}

export {
    useUsers, useAddUsers, useEditUser, useSelectUser, useDeleteUser
}