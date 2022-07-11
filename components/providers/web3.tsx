import { createContext, memo, useContext, useEffect, useMemo, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { provider } from 'web3-core';
import { setupHooks } from "../hooks/web3/setupHooks";

export type CustomHooks = {
  [name: string]: () => any;
}

export type Web3ProviderProps = {
  children: React.ReactNode;
};

export type Web3State = {
  provider: any;
  web3: any;
  contract: any;
  isLoading: boolean;
  hooks: CustomHooks;
  connect?: () => void;
};

const Web3Context = createContext<Web3State>({} as Web3State);

export const Web3Provider = memo(({ children }: Web3ProviderProps) => {
  const [web3Api, setWeb3Api] = useState<Web3State>({
    provider: null,
    web3: null,
    contract: null,
    isLoading: true,
    hooks: setupHooks(null, null)
  });
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider() as provider;
      if (provider) {
        const web3 = new Web3(provider);
        setWeb3Api({
          provider,
          web3,
          contract: null,
          isLoading: false,
          hooks: setupHooks(web3, provider)
        });
      } else {
        setWeb3Api(api => ({...api, isLoading: false}));
        console.error("Please, install Metamask.");
      }
    }
      loadProvider();
    }, []);
    
  const _web3Api = useMemo(() => ({
    ...web3Api,
    connect: web3Api.provider ? 
    async () => {
      try {
        await web3Api.provider?.request({ method: "eth_requestAccounts" });
      } catch (e) {
        console.error("Cannot retreive account", e);
        location.reload();
      }
    } :
    () => console.error("Cannot connect to Metamask, try to reload the page.")
  }), [web3Api]);

  return (
    <Web3Context.Provider value={_web3Api}>
      {children}
    </Web3Context.Provider>
  );
});

/**
 * @description important to avoid react/display-name
 **/
Web3Provider.displayName = "Web3Provider";

export const useWeb3 = () => {
  return useContext(Web3Context);
};


export const useHooks = (callBack: (arg: CustomHooks | undefined) => any) => {
  const { hooks } = useWeb3();
  return callBack(hooks && hooks);
};