import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Product } from "../models/product-list.model";

export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products')
export const selectCartState = createFeatureSelector<ReadonlyArray<string>>('cart')


export const selectCartProducts = createSelector(
    selectProducts,
    selectCartState,
    (products, cart) => {
        return cart.map((id) => products.find((product) => product.id === id)!)
    }
)