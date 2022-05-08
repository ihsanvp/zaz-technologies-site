import ContactDetailItem from "./ContactDetailItem";

import { MdMyLocation } from "@react-icons/all-files/md/MdMyLocation";
import { MdMail } from "@react-icons/all-files/md/MdMail";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";
import { ReactNode } from "react";
import AnimatedAppear from "components/common/AnimatedAppear";
import { motion } from "framer-motion";
import useAnimationColumns from "hooks/useAnimationColumns";

interface Props {
  location: string | ReactNode;
  mail: string | ReactNode;
  mobile: string | ReactNode;
}

export default function ContactDetails(props: Props) {
  const columns = useAnimationColumns({ breakpoints: { 1024: 1 }, initial: 2 });

  return (
    <AnimatedAppear
      hidden={{ scale: 0.9, opacity: 0 }}
      visible={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 1,
        type: "spring",
        delay: columns == 1 ? 0 : 0.7,
      }}
    >
      {(animate) => (
        <motion.div
          {...animate}
          className="lg:sticky lg:top-[80px] lg:h-fit col-span-6 lg:col-span-2 flex flex-col gap-10 bg-white rounded-md p-10"
        >
          <ContactDetailItem icon={MdMyLocation}>
            {props.location}
          </ContactDetailItem>
          <ContactDetailItem icon={MdMail}>{props.mail}</ContactDetailItem>
          <ContactDetailItem icon={MdPhone}>{props.mobile}</ContactDetailItem>
        </motion.div>
      )}
    </AnimatedAppear>
  );
}
