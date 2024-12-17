import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/cart/getCart";

export const useCart = (user_id: number) => useQuery({ queryKey: ['cart', user_id], queryFn: () => getCart() })