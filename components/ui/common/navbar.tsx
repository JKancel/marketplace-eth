import { useWeb3 } from "@components/providers";
import Link from "next/link";
import { Button } from "@components/ui/common";
import { useAccount } from "@components/providers/hooks/useAccount";
import { memo } from "react";

export const Navbar = () => {
  const { connect, isLoading, web3 } = useWeb3();
  const { account } = useAccount();
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Marketplace
                </a>
              </Link>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Blogs
                </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  wishlist
                </a>
              </Link>
              {isLoading ? (
                <Button disabled={true}>Loading...</Button>
              ) : web3 ?
              account?.data ?
              (
                <Button hoverable={false} className="cursor-default">Hi there {account?.isAdmin ? "Admin" : ""}</Button>
              ) : 
              (
                <Button onClick={connect}>Connect&nbsp;Wallet</Button>
              ) : (
                <Button onClick={() => window.open('https://metamask.io/download/', '_blank')}>Install&nbsp;Metamask</Button>
              )}
            </div>
          </div>
        </nav>
      </div>
      { account?.data &&
        <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
          <div className="text-white bg-indigo-600 rounded-md p-2">
            {account.data}
          </div>
        </div>
      }
    </section>
  );
};