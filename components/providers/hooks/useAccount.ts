import { useEffect } from "react";
import Web3 from "web3";
import { useHooks } from "../web3";
import useSWR from "swr";

const adminAddresses : { [key: string]: boolean } = {
  "0x803aE903178f21AD36955d082f4F3dDE75A64D7b": true,
}

export const createUseAccount = (web3: Web3, provider: any) => (): { account: any; } => {
  const { data, mutate, ...rest } = useSWR(() => 
    web3 ? "web3/accounts" : null, // trigger the fetcher when web3 is ready
    async () => {
      const accounts = await web3?.eth.getAccounts();
      return accounts[0];
    }
  );

  const providerInstance = provider;

  useEffect(() => {
    providerInstance && providerInstance.on("accountsChanged", (accounts: any[]) => mutate(accounts[0] ?? null));
  }, [mutate, providerInstance]);

  return { 
    account: {
      data,
      isAdmin: data && !!adminAddresses[data],
      mutate,
      ...rest
    } 
  };
};

export const useAccount = () => {
  return useHooks(hooks => hooks?.useAccount)();
};