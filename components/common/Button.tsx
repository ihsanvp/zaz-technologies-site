import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  variant: Variant;
  children?: ReactNode;
}

type Variant = "primary" | "secondary";
type VariantsType = { [key in Variant]: string };

const VARIANTS: VariantsType = {
  primary: "bg-blue-900 hover:bg-blue-800 text-white",
  secondary: "bg-yellow-500 hover:bg-yellow-400 text-slate-900",
};

export default function AppButton(props: Props) {
  return (
    <Link href={props.href} scroll={false}>
      <a
        className={classNames(
          "text px-16 py-3 rounded font-medium",
          VARIANTS[props.variant]
        )}
      >
        {props.children}
      </a>
    </Link>
  );
}
