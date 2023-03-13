import { useQuery, useMutation } from '@tanstack/react-query'
import axios from "axios";
import { useQueryClient } from '@tanstack/react-query'


//fetch users
const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () =>
            axios
                .get('https://dummyjson.com/users?limit=5')
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
            await queryClient.cancelQueries({ queryKey: ['users'] })
            const previousTodos = queryClient.getQueryData(['users'])
            queryClient.setQueryData(['users'], (old) => [...old, res.data])

            // Return a context object with the snapshotted value
            return { previousTodos }
        },
    })
}



export {
    useUsers, useAddUsers
}