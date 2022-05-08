import ContactDetailItem from "./ContactDetailItem";

import { MdMyLocation } from "@react-icons/all-files/md/MdMyLocation";
import { MdMail } from "@react-icons/all-files/md/MdMail";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";
import { ReactNode } from "react";

interface Props {
  location: string | ReactNode;
  mail: string | ReactNode;
  mobile: string | ReactNode;
}

export default function ContactDetails(props: Props) {
  return (
    <div className="lg:sticky lg:top-[80px] lg:h-fit col-span-6 lg:col-span-2 flex flex-col gap-10 bg-white rounded-md p-10">
      <ContactDetailItem icon={MdMyLocation}>
        {props.location}
      </ContactDetailItem>
      <ContactDetailItem icon={MdMail}>{props.mail}</ContactDetailItem>
      <ContactDetailItem icon={MdPhone}>{props.mobile}</ContactDetailItem>
    </div>
  );
}
