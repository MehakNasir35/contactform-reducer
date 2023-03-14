import { useQuery, useMutation } from '@tanstack/react-query'
import axios from "axios";
import { useQueryClient } from '@tanstack/react-query'

//fetch users
const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () =>
            axios
                .get('https://dummyjson.com/users?limit=3')
                .then((res) => res.data.users)
    })
}

//add user
const useAddUsers = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
                .post('https://dummyjson.com/users/add', data)
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

//edit user
const useEditUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
                .put(`https://dummyjson.com/users/${data.id}`, data)
        }, onSuccess: async (res) => {
            const newUser = res.data
            await queryClient.cancelQueries({ queryKey: ['users', newUser.id] })
            const previousTodo = queryClient.getQueryData(['users', newUser.id])
            debugger
        }, onSettled: (res) => {
            const newUser = res.data
            console.log(queryClient.getQueryData(['users']))
            queryClient.invalidateQueries({ queryKey: ['users', { id: newUser.id }] })
        },
    })
}

export {
    useUsers, useAddUsers, useEditUser
}