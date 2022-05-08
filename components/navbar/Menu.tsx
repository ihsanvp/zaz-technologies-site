import { AnimatePresence, motion } from "framer-motion";

import MenuLink from "./MenuLink";

import { IoCloseSharp } from "@react-icons/all-files/io5/IoCloseSharp";
import { AppLink, AppSocial } from "types/app";
import SocialButton from "components/common/SocialButton";

interface Props {
  closeMenu: VoidFunction;
  open: boolean;
  links: AppLink[];
  socials: AppSocial[];
}

export default function Menu(props: Props) {
  return (
    <AnimatePresence>
      {props.open ? (
        <motion.div
          key="menu"
          className="fixed inset-0 bg-slate-900 z-[99]"
          initial={{ clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: "inset(0 0 0 0%)" }}
          exit={{ clipPath: "inset(0 100% 0 0)" }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto flex flex-col w-full h-full py-5">
            <div className="flex items-center justify-between">
              <div className="text-white font-medium text-lg font-barlow pl-3">
                ZAZ TECHNOLOGIES
              </div>
              <button className="p-3 text-white" onClick={props.closeMenu}>
                <IoCloseSharp />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-start px-3 justify-center gap-10 h-full">
              {props.links.length
                ? props.links.map((link) => (
                    <MenuLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      closeMenu={props.closeMenu}
                    />
                  ))
                : null}
            </div>
            <div className="flex items-center py-3 px-3 gap-5">
              {props.socials.length
                ? props.socials.map((social) => (
                    <SocialButton
                      key={social.url}
                      icon={social.icon}
                      url={social.url}
                      size={20}
                    />
                  ))
                : null}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
