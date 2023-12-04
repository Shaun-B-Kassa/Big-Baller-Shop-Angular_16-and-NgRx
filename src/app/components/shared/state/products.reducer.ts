import { createReducer, on } from '@ngrx/store'

import { ProductsApplication } from './products.actions' 
import { Product } from '../models/product-list.model'

const initialState: ReadonlyArray<Product> = []

export const productsReducer = createReducer(
    initialState,
    on(ProductsApplication.retrivedProductList,(_state, { products }) => products)
)