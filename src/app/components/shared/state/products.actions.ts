import { createActionGroup, props } from '@ngrx/store'
import { Product } from '../models/product-list.model'

export const ProductsActions = createActionGroup({
    source: 'Products',
    events: {
        'Add Product': props<{productId: string}>(),
        'Remove Product': props<{productId: string}>()
    }
})

export const ProductsApplication = createActionGroup({
    source: 'Products API',
    events: {
        'Retrived Product List': props<{products: ReadonlyArray<Product>}>()
    }
})