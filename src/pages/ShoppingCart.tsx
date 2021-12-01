import { Grid } from "@mui/material"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { OfferItem } from "../components/offers/OfferItem"
import { useGetAllBookOffers } from "../hooks/useGetAllBookOffers"
import { TOffer } from "../model/Offer"
import { ShoppingCartAtom } from "../state/ShoppingCartStore"

export const ShoppingCart = () => {
    const [shoppingCartState, setShoppingCartState] = useRecoilState(ShoppingCartAtom)
    const { data } = useGetAllBookOffers(shoppingCartState)

    return (
        <>
            <h1>Mon panier</h1>
            <Grid container spacing={3}>
                {
                    data?.offers?.map((offer: TOffer, index: number) => (
                        <Grid key={index} item xs={12} md={4}>
                            <OfferItem {...offer}/>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}