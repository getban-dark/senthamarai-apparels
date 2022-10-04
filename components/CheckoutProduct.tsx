import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { urlFor } from "../sanity";

import { removeFromBasket } from "../redux/basketSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { BiRupee } from "react-icons/bi";

interface Props {
  items: Product[];
  id: string;
}
function CheckoutProduct({ id, items }: Props) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));

    toast.error(`${items[0].title} removed from bag`, {
      position: "bottom-center",
    });
  };

  return (
    <div className="flex flex-col space-x-4 border-b border-gray-300 py-4 lg:flex-row lg:items-center">
      <div className=" relative h-44 w-44">
        <Image
          src={urlFor(items[0].image[0]).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-1 items-end lg:items-center ">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className=" font-semibold lg:w-96">{items[0].title}</h4>
            <p className="flex items-end gap-x-1 font-semibold">
              {items.length}
              <ChevronDownIcon className="h-6 w-6 text-blue-500" />
            </p>
          </div>
          <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
            Show product details
            <ChevronDownIcon className="h-6 w-6" />
          </p>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="flex items-center justify-center  pt-4 text-xl font-semibold">
            <BiRupee className="h-5 w-5" />
            <p>{items.reduce((total, item) => total + item.price, 0)}</p>
          </h4>
          <button
            onClick={removeItemFromBasket}
            className="text-blue-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
