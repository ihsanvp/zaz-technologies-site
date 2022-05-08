import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppLink } from "types/app";

interface Props extends AppLink {
  isNavbarActive: boolean;
}

export default function NavbarLink(props: Props) {
  const router = useRouter();
  const isActive = router.route == props.href;

  return (
    <Link href={props.href} scroll={false}>
      <a
        className={classNames(
          "text-lg relative before:absolute before:left-0 before:right-0 before:-bottom-[2px] before:h-[2px] before:origin-left before:scale-x-0 before:transition-all before:duration-500 before:hover:scale-x-100",
          isActive && "before:scale-x-100",
          props.isNavbarActive
            ? "before:bg-slate-900 before:hover:bg-slate-900"
            : "before:bg-white before:hover:bg-white"
        )}
      >
        {props.label}
      </a>
    </Link>
  );
}
