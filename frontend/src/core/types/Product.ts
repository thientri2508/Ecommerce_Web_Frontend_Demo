export interface Product {
    id?: number;
    product_name?: string;
    market_price?: number;
    listed_price?: number;
    logo_product?: string;
    list_image?: string
    description?: string;
    warranty_policy?: string;
    user_manual?: string;
    discount?: number;
    id_store?: number;
    list_attribute?: string;
    rating?: number;
    active?: boolean;
    total_stock?: number;
    category_id?: number;
  }