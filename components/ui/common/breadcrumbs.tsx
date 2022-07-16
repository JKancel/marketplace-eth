import { FC } from "react";
import Link from "next/link";

type BreadcrumbItem = {
  value: string;
  href: string;
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => (
  <nav aria-label="breadcrumb" className="flex flex-row-reverse pb-4 px-4 sm:px-6 lg:px-8">
    <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
      {items.map((item, index) => (
      <li key={item.value} className={`${index === 0 ? 'pr-4' : 'px-4'} font-medium text-gray-500 hover:text-gray-900`}>
        <Link href={item.href}>
        <a>{item.value}</a>
        </Link>
      </li>
      ))}
    </ol>
  </nav>
);
