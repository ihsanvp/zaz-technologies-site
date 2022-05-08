import { ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
}

export default function DividedCardContent(props: Props) {
  return (
    <div className="order-2 lg:order-none flex flex-col items-start justify-center gap-5 lg:gap-10 px-5 sm:px-10 py-10 sm:py-20 md:py-10 lg:py-20">
      <div className="text-4xl 2xl:text-5xl mb-5 font-barlow font-bold text-blue-900 app_underline--full">
        {props.title}
      </div>
      <div className="text-slate-600 flex flex-col gap-5">{props.children}</div>
    </div>
  );
}
