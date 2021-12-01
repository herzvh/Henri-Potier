import { getAll } from './../services/BookService';
import { useQuery } from "react-query"

export const useGetAllBooks =  () => {
    return useQuery('GET_ALL_BOOKS', () => getAll())
}