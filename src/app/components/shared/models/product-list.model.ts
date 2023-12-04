export interface Product {
    product: string,
    name: string,
    price: number,
    quantity: number,
    id: string
}

export interface ProductList {
    productList: Product[]
}