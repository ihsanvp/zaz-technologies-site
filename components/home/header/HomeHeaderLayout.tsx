import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function HomeHeaderLayout(props: Props) {
  return (
    <section className="w-full pt-[80px] pb-40 relative min-h-[70vh] flex flex-col">
      {props.children}
    </section>
  );
}
