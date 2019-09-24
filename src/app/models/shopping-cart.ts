export interface IProduct {
    id: number;
    name: string;
    price: number;
}

export interface IShoppingItem {
    selectedProduct: IProduct;
    quantity: number;
    itemTotal: number;
}
