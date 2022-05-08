import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function DividedCardLayout(props: Props) {
  return (
    <div className="bg-white overflow-hidden rounded-md">
      <div className="grid lg:grid-cols-2">{props.children}</div>
    </div>
  );
}
