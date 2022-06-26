import { BaseLayout } from "@components/ui/layout";
import "@styles/globals.css";
import { CustomNextPage } from "model/common/customNextPages";
import { NextComponentType, NextPageContext } from "next";

type CustomAppProps = {
  pageProps: any
  Component: NextComponentType<NextPageContext, any, {}> & CustomNextPage
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  const Layout = Component.Layout ?? BaseLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
