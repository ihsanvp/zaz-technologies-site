import { ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
}

export default function AboutCard(props: Props) {
  return (
    <div className="bg-blue-900 rounded-md px-5 py-10 sm:px-10 flex flex-col gap-10 items-start">
      <div className="text-4xl text-white font-medium font-barlow app_underline--full">
        {props.title}
      </div>
      <div className="flex flex-col gap-5 text-slate-100">{props.children}</div>
    </div>
  );
}
