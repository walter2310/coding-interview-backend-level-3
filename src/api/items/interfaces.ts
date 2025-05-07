export interface CreateItem {
    name: string;
    price: number;
}

export interface UpdateItem extends Partial<CreateItem> {}