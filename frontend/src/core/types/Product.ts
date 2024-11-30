export interface Product {
    id: number;
    product_name: string;
    market_price: number;
    listed_price: number;
    logo_product: string;
    description: string;
    discount: number;
    id_store: number;
    rating: number;
    active: boolean;
    stock_product: number;
    category_id: number;
  }