import { Web3Provider } from "@components/providers";
import { Footer, Navbar } from "@components/ui/common";
import { LayoutProps } from "model/common/customNextPages";
import { FC } from "react";


export const BaseLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <Web3Provider>
      <div className="max-w-8xl mx-auto px-4">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </Web3Provider>
  );
};
