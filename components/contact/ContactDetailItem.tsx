import { IconType } from "@react-icons/all-files";
import { ReactNode } from "react";

interface Props {
  icon: IconType;
  children?: ReactNode;
}

export default function ContactDetailItem(props: Props) {
  return (
    <div className="flex gap-3">
      <div className="text-blue-900">
        <props.icon size="25" />
      </div>
      <div className="text-sm text-blue-900 flex-1">{props.children}</div>
    </div>
  );
}
