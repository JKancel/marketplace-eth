import { Breadcrumbs } from "../common";
import { EthRates, WalletBar } from "../web3";


const LINKS = [{
  href: "/marketplace",
  value: "Buy"
}, {
  href: "/marketplace/courses/owned",
  value: "My Courses"
}, {
  href: "/marketplace/courses/manage",
  value: "Manage Courses"
}];

export const MarketHeader = () => {
  return (
    <div className="py-4">
      <WalletBar />
      <EthRates />
      <Breadcrumbs items={LINKS} />
    </div>
  )
}