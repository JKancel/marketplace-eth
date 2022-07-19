import Image from "next/image";
import { useEthPrice, COURSE_PRICE } from "@components/hooks/useEthPrice";
import { Loader } from "../common/loader";

export const EthRates = () => {
  const { ethPrice } = useEthPrice();
  return (
    <div className="inline-grid gap-7 grid-cols-1 sm:grid-cols-2">
      <div className="flex flex-1 items-stretch text-center min-w-max">
        <div className="p-10 border drop-shadow rounded-md w-full">
          <div className="flex items-center">
            { ethPrice.data ?
            <>
              <Image
                layout="fixed"
                height="35"
                width="35"
                src="/small-eth.webp"
                alt="eth_logo"
              />
              <span className="text-2xl font-bold">ETH = {ethPrice.data}$</span>
            </> :
            <div className="w-full flex justify-center">
              <Loader />
            </div>
            }
          </div>
          <p className="text-xl text-gray-500">Current eth Price</p>
        </div>
      </div>
      <div className="flex flex-1 items-stretch text-center min-w-max">
        <div className="p-10 border drop-shadow rounded-md w-full">
          <div className="flex items-center">
            { ethPrice.perItem ?
              <>
                <span className="text-2xl font-bold">{ethPrice.perItem}</span>
                <Image
                  layout="fixed"
                  height="35"
                  width="35"
                  src="/small-eth.webp"
                  alt="eth_logo"
                />
                <span className="text-2xl font-bold"> = {COURSE_PRICE}$</span>
              </> :
              <div className="w-full flex justify-center">
                <Loader />
              </div>
            }
          </div>
          <p className="text-xl text-gray-500">Price per course</p>
        </div>
      </div>
    </div>
  );
};
