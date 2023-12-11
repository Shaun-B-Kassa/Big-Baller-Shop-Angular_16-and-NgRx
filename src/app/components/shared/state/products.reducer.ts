import { createReducer, on } from '@ngrx/store'

import { ProductsApplication } from './products.actions' 
import { Product } from '../models/product.model'

const initialState: Array<Product> = []

export const productsReducer = createReducer(
    initialState,
    on(ProductsApplication.retrivedProductList,(_state, { products }) => products)
)

const filtersState: Array<string> =[]
export const filtersReducer = createReducer(
    filtersState,
    on(ProductsApplication.retrivedProductFilters,(_state, { filters }) => filters)
)