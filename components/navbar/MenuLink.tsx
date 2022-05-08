import { useRouter } from "next/router";
import { AppLink } from "types/app";

interface Props extends AppLink {
  closeMenu: VoidFunction;
}

export default function MenuLink(props: Props) {
  const router = useRouter();

  async function onClick() {
    router.push(props.href);
    props.closeMenu();
  }

  return (
    <button className="text-slate-100 text-2xl" onClick={onClick}>
      {props.label}
    </button>
  );
}
