import { IconType } from "@react-icons/all-files";
import { IoMdCheckmarkCircleOutline } from "@react-icons/all-files/io/IoMdCheckmarkCircleOutline";

interface Props {
  children?: string;
}

export default function ListItem(props: Props) {
  return (
    <li className="flex gap-3 py-1">
      <div className="text-blue-900">
        <IoMdCheckmarkCircleOutline size="25" />
      </div>
      <div className="text-lg">{props.children}</div>
    </li>
  );
}
