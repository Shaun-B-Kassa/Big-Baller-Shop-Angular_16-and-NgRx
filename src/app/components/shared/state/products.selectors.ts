import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Product } from "../models/product.model";

export const selectProducts = createFeatureSelector<Array<Product>>('products')
export const selectFiltersState = createFeatureSelector<Array<string>>('filters')
export const selectCartState = createFeatureSelector<Array<number>>('cart')


export const selectCartProducts = createSelector(
    selectProducts,
    selectCartState,
    (products, cart) => {
        return cart.map((id) => products.find((product) => product.id === id)!)
    }
)

