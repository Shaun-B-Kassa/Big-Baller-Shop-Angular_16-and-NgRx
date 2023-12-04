import { createReducer, on } from "@ngrx/store";

import { ProductsActions } from "./products.actions";

const initialState: ReadonlyArray<string> = []

export const  cartReducer = createReducer(
    initialState,
    on(ProductsActions.addProduct, (state,{ productId }) => {
        if(state.indexOf(productId) > -1) return state;

        return [...state, productId]
    }),
    on(ProductsActions.removeProduct, (state,{ productId }) => {
        return state.filter(id => id != productId)
    })


)