import { useQuery, useMutation } from '@tanstack/react-query'
import axios from "axios";
import { useQueryClient } from '@tanstack/react-query'

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
            return { newUser }
        }, onSettled: (res) => {
            // const newUser = res.data
            // queryClient.invalidateQueries({ queryKey: [] })
            queryClient.invalidateQueries('users', { id: res.id })
        }  
    })
}


//edit user
const useEditUser = () => {
    // const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            console.log(data)
            // return axios
            //     .put(`https://dummyjson.com/users/${data.id}`, data)
        }, onSuccess: async (res) => {
            // const newUser = res.data
            // await queryClient.cancelQueries({ queryKey: ['users', newUser.id] })
            // const previousTodo = queryClient.getQueryData(['users', newUser.id])
            // // Optimistically update to the new value
            // queryClient.setQueryData(['users', newUser.id], newUser)
            // // Return a context with the previous and new todo
            // return { previousTodo, newUser }
        }, onSettled: (res) => {
            // const newUser = res.data
            // queryClient.invalidateQueries({ queryKey: ['users', { id: newUser.id }] })
        },
    })
}

export {
    useUsers, useAddUsers, useEditUser, useSelectUser
}