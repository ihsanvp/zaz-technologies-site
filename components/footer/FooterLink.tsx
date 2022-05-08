import Link from "next/link";
import { AppLink } from "types/app";

interface Props extends AppLink {}

export default function FooterLink(props: Props) {
  return (
    <Link href={props.href} scroll={false}>
      <a className="block text-sm text-slate-400">{props.label}</a>
    </Link>
  );
}
