import Link, { LinkProps } from "next/link";
import { cloneElement, FC, ReactElement } from "react";
import { useRouter } from "next/router";

type ActiveLinkProps = LinkProps & {
  children: ReactElement;
  activeLinkClass?: string;
};

export const ActiveLink: FC<ActiveLinkProps> = ({
  children, activeLinkClass, ...props
}) => {
  const { pathname } = useRouter();
  let className = children?.props?.className || "";
  if (pathname === props.href) {
    className += ` ${activeLinkClass || 'text-indigo-600'} `;
  } else {
    className += ` text-gray-500`;
  }
  return <Link {...props}>{ cloneElement(children, {className}) }</Link>;
};
