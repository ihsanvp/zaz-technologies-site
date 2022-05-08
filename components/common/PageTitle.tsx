import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function PageTitle(props: Props) {
  return (
    <h3 className="text-5xl text-center font-barlow font-bold text-blue-900 mb-20 app_underline--half">
      {props.children}
    </h3>
  );
}
