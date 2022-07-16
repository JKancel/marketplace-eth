import { FC } from "react";
import Image from "next/image";

type EthRatesProps = {
  ethPrice: number;
  ethPricePerItem: number;
};

export const EthRates: FC<EthRatesProps> = ({ ethPrice, ethPricePerItem }) => (
  <div className="inline-grid gap-7 grid-cols-1 sm:grid-cols-2 mb-5">
    <div className="flex flex-1 items-stretch text-center min-w-max">
      <div className="p-10 border drop-shadow rounded-md w-full">
        <div className="flex items-center">
          <Image layout="fixed" height="35" width="35" src="/small-eth.webp" alt="eth_logo"/>
          <span className="text-2xl font-bold">ETH = {ethPrice}$</span>
        </div>
        <p className="text-xl text-gray-500">Current eth Price</p>
      </div>
    </div>
    <div className="flex flex-1 items-stretch text-center min-w-max">
      <div className="p-10 border drop-shadow rounded-md w-full">
        <div className="flex items-center">
          <span className="text-2xl font-bold">{ethPricePerItem}</span>
          <Image layout="fixed" height="35" width="35" src="/small-eth.webp" alt="eth_logo"/>
          <span className="text-2xl font-bold"> = 15$</span>
        </div>
        <p className="text-xl text-gray-500">Price per course</p>
      </div>
    </div>
  </div>
);
