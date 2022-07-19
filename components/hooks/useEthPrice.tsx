import useSWR from "swr";

// const URL = "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false";
const URL = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
export const COURSE_PRICE = 15

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const json = await res.json()
  // return json.market_data.current_price.usd ?? null
  return json.ethereum.usd ?? null
}

export const useEthPrice = () => {
  const { data, ...rest } = useSWR(
    URL, 
    fetcher,
    { refreshInterval: 10000 }
  );
  const perItem = (data && (COURSE_PRICE / Number(data)).toFixed(6)) ?? null
  return { ethPrice: {data, perItem, ...rest}};
}
