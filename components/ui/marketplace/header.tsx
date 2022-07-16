import { Breadcrumbs } from "../common";
import { EthRates, WalletBar } from "../web3";




export const MarketHeader = () => {
  return (
    <>
      <WalletBar />
      <EthRates />
      <Breadcrumbs />
    </>
  )
}