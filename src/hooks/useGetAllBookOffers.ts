import { getOffers } from './../services/BookService';
import { useQuery } from "react-query"

export const useGetAllBookOffers =  (isbns: string[]) => {
    return useQuery(
        ['GET_ALL_BOOK_OFFERS', isbns], 
        () => getOffers(isbns),
        {
            enabled: isbns && isbns.length > 0
        }
    )
}