import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
import { BookItem } from "../components/books/BookItem"
import { useGetAllBooks } from "../hooks/useGetAllBooks"
import { TBook } from "../model/Book"

export const Home = () => {
    const { data, isLoading, isSuccess } = useGetAllBooks()
    
    return (
        <>
            <Box mb={2}>
                <h1>Livres</h1>
            </Box>
            <Grid container spacing={3}>
                {
                    isLoading && (
                        <Box mt={3}>
                            <Typography>
                                ...Loading
                            </Typography>
                        </Box>
                    )
                }
                {
                    isSuccess && (
                        <>
                            {
                                data.map((book: TBook, index: number) => (
                                    <Grid key={index} item xs={12} md={4}>
                                        <BookItem {...book}/>
                                    </Grid>
                                ))
                            }
                        </>
                    )
                }                
            </Grid>
        </>
    )
}