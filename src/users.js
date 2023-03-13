import { useQuery, useMutation } from '@tanstack/react-query'
import axios from "axios";
import { QueryClient, QueryClientProvider } from  '@tanstack/react-query';
const queryClient = new QueryClient({});

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
    return useMutation({
        mutationFn: (data) => {
            return axios
            .post('https://dummyjson.com/users/add', data)
            .then((res) =>  queryClient.setQueryData(['users'], (old) => [...old, res]))
        },
    })
}

export {
    useUsers, useAddUsers
}