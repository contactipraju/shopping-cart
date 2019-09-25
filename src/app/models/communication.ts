import { IProduct, IShoppingItem } from './shopping-cart';

export interface ICommunication {
    operation: string;
    data: IShoppingItem;
}
