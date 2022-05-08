import { MdPhone } from "@react-icons/all-files/md/MdPhone";
import { MdMail } from "@react-icons/all-files/md/MdMail";
import { AppSocial } from "types/app";
import SocialButton from "components/common/SocialButton";
import { motion } from "framer-motion";

interface Props {
  mobile: string;
  mail: string;
  socials: AppSocial[];
}

export default function TopBanner(props: Props) {
  return (
    <motion.div
      className="bg-blue-900 py-5 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="hidden sm:flex gap-3 items-center text-slate-300">
            <MdPhone size="20" />
            <div className="text-sm">{props.mobile}</div>
          </div>
          <div className="flex flex-1 sm:flex-none items-center justify-between sm:justify-center gap-5">
            <div className="flex gap-3 items-center text-slate-300">
              <MdMail size="20" />
              <div className="text-sm">{props.mail}</div>
            </div>
            <div className="text-sm hidden sm:block text-white">|</div>
            <div className="flex gap-3 items-center t">
              {props.socials.length
                ? props.socials.map((social) => (
                    <SocialButton
                      key={social.url}
                      url={social.url}
                      icon={social.icon}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
