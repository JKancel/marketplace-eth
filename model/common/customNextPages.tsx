import type { NextPage } from "next";
import { FC } from "react";

export type LayoutProps = {
  children: React.ReactNode;
};

export type CustomNextPage<P = {}> = NextPage<P> & {
  Layout?: FC<LayoutProps>;  
}