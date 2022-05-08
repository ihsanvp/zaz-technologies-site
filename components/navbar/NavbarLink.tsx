import Link from "next/link";
import { AppLink } from "types/app";

interface Props extends AppLink {}

export default function NavbarLink(props: Props) {
  return (
    <Link href={props.href} scroll={false}>
      <a>{props.label}</a>
    </Link>
  );
}
