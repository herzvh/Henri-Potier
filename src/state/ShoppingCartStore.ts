import { atom } from "recoil";

export const ShoppingCartAtom = atom<string[]>({
    key: 'SHOPPING_CART_ATOM',
    default: []
})