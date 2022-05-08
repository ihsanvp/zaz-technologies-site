import classNames from "classnames";

import Image from "components/common/Image";
import NavbarLink from "./NavbarLink";

import { RiMenu4Line } from "@react-icons/all-files/ri/RiMenu4Line";
import { AppLink } from "types/app";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  onMount: (node?: Element | null | undefined) => void;
  openMenu: VoidFunction;
  active: boolean;
  logo: ResponsiveImage;
  links: AppLink[];
}

export default function Bar(props: Props) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={props.onMount}
      className={classNames(
        "sticky top-[-1px] h-[60px] bg-white z-[99] shadow-sm transition-shadow duration-300",
        props.active ? "shadow-sm" : "shadow-none"
      )}
    >
      <div
        className={classNames(
          "absolute inset-0 left-[240px] sm:left-[50vw] md:left-[40vw] lg:left-[30vw] z-[-1] transition-colors duration-300",
          !props.active && "bg-slate-900"
        )}
      ></div>
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="h-full py-3">
          <Link href="/">
            <a className="h-full block">
              <Image
                className="h-full w-auto"
                src={props.logo}
                alt="logo"
                sizes="30vw"
              />
            </a>
          </Link>
        </div>
        <div
          className={classNames(
            "hidden md:flex items-center gap-10 h-full transition-colors duration-300",
            props.active ? "text-slate-800" : "text-slate-200"
          )}
        >
          {props.links.length
            ? props.links.map((link) => (
                <NavbarLink
                  key={link.href}
                  label={link.label}
                  href={link.href}
                />
              ))
            : null}
        </div>
        <div
          className={classNames(
            "flex md:hidden items-center justify-center transition-colors duration-300",
            props.active ? "text-slate-800" : "text-slate-200"
          )}
        >
          <button className="p-2" onClick={props.openMenu}>
            <RiMenu4Line size="25" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
