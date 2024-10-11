export type Product = {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
};

export type ProductInput = Omit<Product, "id">