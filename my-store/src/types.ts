export interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    image:string;
    description: string;
}

export interface CartProduct {
    id: number;
    title: string;
    category: string;
    price: number;
    image:string;
    description: string;
    quantity:number;
}
