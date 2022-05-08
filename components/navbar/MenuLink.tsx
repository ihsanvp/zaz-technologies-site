import { useRouter } from "next/router";
import { AppLink } from "types/app";

import { HiOutlineArrowNarrowRight } from "@react-icons/all-files/hi/HiOutlineArrowNarrowRight";
import classNames from "classnames";

interface Props extends AppLink {
  closeMenu: VoidFunction;
}

export default function MenuLink(props: Props) {
  const router = useRouter();
  const isActive = router.route == props.href;

  async function onClick() {
    router.push(props.href);
    props.closeMenu();
  }

  return (
    <button
      className={classNames(
        "text-slate-100 text-2xl flex w-full items-center justify-between",
        isActive && "underline underline-offset-4"
      )}
      onClick={onClick}
    >
      <span>{props.label}</span>
      <HiOutlineArrowNarrowRight />
    </button>
  );
}
