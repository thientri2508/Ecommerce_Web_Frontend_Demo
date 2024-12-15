import { Checkbox } from "antd";
import { MdChevronRight } from "react-icons/md";
import houseIcon from "../../../core/assets/icon/house.png";
import truckIcon from "../../../core/assets/icon/truck.png";
import { ItemProduct } from "./ItemProduct";
import { CartItem } from "../../../core/types/CartItem";
import { useEffect, useState } from "react";

type ItemStoreProps = {
  name_store: string;
  id_store: number;
  CartList: CartItem[];
  refetch: () => void;
  setSelectedItemCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  selectedItemCart: CartItem[];
  checkSelectedAllItem: boolean;
  setCheckSelectedAllItem: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ItemStore: React.FC<ItemStoreProps> = ({
  name_store,
  id_store,
  CartList,
  refetch,
  setSelectedItemCart,
  selectedItemCart,
  checkSelectedAllItem,
  setCheckSelectedAllItem,
}) => {
  
  const [checkSelectedItemStore, setCheckSelectedItemStore] = useState(false);
  const handleCheckboxChange = () => {
    if (!checkSelectedItemStore) {
      const filteredItems =
        CartList?.filter((item) => item.id_store === id_store) || [];
      setSelectedItemCart((prevSelectedItems) => {
        const newItems = filteredItems.filter(
          (newItem) =>
            !prevSelectedItems.some(
              (existingItem) => existingItem.id === newItem.id
            )
        );
        return [...prevSelectedItems, ...newItems];
      });
    } else {
      setSelectedItemCart(prevSelectedItems =>
        prevSelectedItems.filter(item => item.id_store !== id_store)
      );
    }
    setCheckSelectedItemStore(!checkSelectedItemStore)
    setCheckSelectedAllItem(false)
  };

  useEffect(() => {
    setCheckSelectedItemStore(checkSelectedAllItem)
  }, [checkSelectedAllItem]);

  return (
    <div className="w-full bg-bg rounded-[16px] px-3 mt-4 pb-3">
      <div className="w-full flex gap-3 items-center px-5 py-4 border-solid border-b-[1px]">
        <Checkbox
          className="font-sans custom-checkbox"
          checked={checkSelectedItemStore}
          onChange={handleCheckboxChange}
        ></Checkbox>
        <div className="py-1 px-[10px] rounded-[16px] bg-[#F2DFE0] text-[14px] text-bg-alt1">
          Chính hãng
        </div>
        <div className="text-[16px] font-bold">{name_store}</div>
      </div>

      {CartList?.filter((cart: CartItem) => cart.id_store === id_store)?.map(
        (cartItem: CartItem) => (
          <ItemProduct
            key={cartItem.product_id}
            product={cartItem}
            refetch={refetch}
            setSelectedItemCart={setSelectedItemCart}
            selectedItemCart={selectedItemCart}
            setCheckSelectedItemStore={setCheckSelectedItemStore}
            setCheckSelectedAllItem={setCheckSelectedAllItem}
          />
        )
      )}

      <div className="w-full flex items-center gap-3 px-5 py-2 cursor-pointer mt-1">
        <img src={houseIcon}></img>
        <div className="font-light">Giảm 10k cho đơn hàng trên 200k</div>
        <MdChevronRight size={20} className="text-text-muted" />
      </div>
      <div className="w-full flex items-center gap-3 px-5 py-2 cursor-pointer">
        <img src={truckIcon}></img>
        <div className="font-light">
          Giảm phí vận chuyển 25k cho đơn hàng trên 100k
        </div>
        <MdChevronRight size={20} className="text-text-muted" />
      </div>
    </div>
  );
};
