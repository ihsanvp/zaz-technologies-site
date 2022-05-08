import { IconType } from "@react-icons/all-files";
import { ReactNode } from "react";

interface Props {
  icon: IconType;
  children?: ReactNode;
}

export default function FooterItem(props: Props) {
  return (
    <div className="flex gap-3">
      <div className="text-slate-400">
        <props.icon size="25" />
      </div>
      <div className="text-sm text-slate-400 flex-1">{props.children}</div>
    </div>
  );
}
