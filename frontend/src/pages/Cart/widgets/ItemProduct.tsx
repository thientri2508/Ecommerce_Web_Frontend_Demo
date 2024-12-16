import { FaPlus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { RiSubtractFill } from "react-icons/ri";
import CustomSelect from "./CustomSelect";
import { Checkbox } from "antd";
import { useModal } from "../../../core/context/ModalContext";
import { CartItem } from "../../../core/types/CartItem";
import { deleteItemCart } from "../../../core/services/cart/deleteCart";

type ItemProductProps = {
  product: CartItem;
  refetch: () => void;
  setSelectedItemCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  selectedItemCart: CartItem[];
  setCheckSelectedItemStore: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckSelectedAllItem: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ItemProduct: React.FC<ItemProductProps> = ({
  product,
  refetch,
  setSelectedItemCart,
  selectedItemCart,
  setCheckSelectedItemStore,
  setCheckSelectedAllItem,
}) => {
  const { showModal } = useModal();
  const handleDeleteCart = () => {
    showModal("Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?", async () => {
      // Xử lý ở đây
      //await deleteItemCart(product?.id);
      //refetch();
    });
  };

  const handleCheckboxChange = () => {
    setCheckSelectedItemStore(false);
    setCheckSelectedAllItem(false)
    setSelectedItemCart((prevSelectedItems: CartItem[]) => {
      const isItemSelected = prevSelectedItems.some(
        (selectedItem: CartItem) => selectedItem.id === product?.id
      );

      if (isItemSelected) {
        // Nếu sản phẩm đã được chọn thì xóa khỏi selectedItems
        return prevSelectedItems.filter(
          (selectedItem: CartItem) => selectedItem.id !== product?.id
        );
      } else {
        // Nếu sản phẩm chưa được chọn thì thêm vào selectedItems
        return [...prevSelectedItems, product];
      }
    });
  };

  return (
    <div className="w-full flex justify-between items-center px-5 py-4 border-solid border-b-[1px]">
      <div className="relative">
        <Checkbox
          className="font-sans absolute top-[-1px] custom-checkbox"
          onChange={handleCheckboxChange}
          checked={selectedItemCart.some(
            (selectedItem) => selectedItem.id === product?.id
          )}
        ></Checkbox>
        <img
          src={product?.logo_product}
          className="w-[70px] h-[70px] rounded-[4px] ml-2 mt-2"
        ></img>
      </div>
      <div className="w-[35%]">
        <div className="line-clamp-2 overflow-hidden text-ellipsis">
          {product?.product_name}
        </div>
        <div className="mt-2 flex gap-5">
          <CustomSelect />
          <CustomSelect />
        </div>
      </div>

      <div className="w-[15%] flex flex-col items-end pr-4">
        {product?.discount ? (
          <>
            <div className="text-priceColor font-bold text-[16px]">
              {(product?.price * (1 - product?.discount / 100))?.toLocaleString(
                "vi-VN"
              )}{" "}
              đ
            </div>
            <div className="line-through text-[14px] text-priceColor-alt">
              {product?.price?.toLocaleString("vi-VN")} đ
            </div>
          </>
        ) : (
          <div className="text-priceColor font-bold text-[16px]">
            {product?.price?.toLocaleString("vi-VN")} đ
          </div>
        )}
      </div>

      <div className="flex justify-between items-center w-[110px] rounded-[32px] border-[1px] px-3 py-[6px]">
        <RiSubtractFill
          size={18}
          // color={quantity > 1 ? "#d91d2c" : "#ccc"}
          // className={`select-none ${
          //   quantity > 1
          //     ? "hover:opacity-80 cursor-pointer"
          //     : "cursor-not-allowed"
          // }`}
          // onClick={handleDecrease}
        />
        <span className="text-[14px]">{product?.quantity}</span>
        <FaPlus
          size={14}
          color="#d91d2c"
          className="cursor-pointer select-none hover:opacity-80"
          // onClick={handleIncrease}
        />
      </div>

      {product?.discount ? (
        <div className="text-priceColor font-bold text-[16px] w-[15%] pl-3">
          {(
            product?.price *
            (1 - product?.discount / 100) *
            product?.quantity
          )?.toLocaleString("vi-VN")}{" "}
          đ
        </div>
      ) : (
        <div className="text-priceColor font-bold text-[16px] w-[15%]">
          {product?.price?.toLocaleString("vi-VN")} đ
        </div>
      )}

      <GoTrash
        size={18}
        className="text-text-muted cursor-pointer"
        onClick={handleDeleteCart}
      />
    </div>
  );
};
