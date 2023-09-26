export interface Product {
  id: number;
  name: string;
  qty: number;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    qty: 1,
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini',
    qty: 1,
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    qty: 1,
    price: 299,
    description: ' A standard phone with a standard screen',
  },
];
