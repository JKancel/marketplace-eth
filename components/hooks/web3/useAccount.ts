import { useEffect } from "react";
import Web3 from "web3";
import useSWR, { SWRResponse } from "swr";

const adminAddresses: { [key: string]: boolean; } = {
  "0xc8f8a43d75617377230a387977f727e0f44d44215e33f0f756f97093929e4326": true,
};

export const createAccountHook = (web3: Web3 | null, provider: any) => (): SWRResponse & any => {
  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/accounts" : null, // trigger the fetcher when web3 is ready
    async () => {
      const accounts = await web3!.eth.getAccounts();
      return accounts[0];
    }
  );

  const providerInstance = provider;

  useEffect(() => {
    providerInstance && providerInstance.on("accountsChanged", (accounts: any[]) => mutate(accounts[0] ?? null));
  }, [mutate, providerInstance]);

  return {
    data,
    isAdmin: web3 && data && !!adminAddresses[web3.utils.keccak256(data)],
    mutate,
    ...rest
  };
};