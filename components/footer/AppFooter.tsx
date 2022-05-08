import { MdMyLocation } from "@react-icons/all-files/md/MdMyLocation";
import { MdMail } from "@react-icons/all-files/md/MdMail";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";
import { AppLink, AppSocial } from "types/app";
import SocialButton from "components/common/SocialButton";
import FooterItem from "./FooterItem";
import FooterLink from "./FooterLink";
import { ReactNode } from "react";

interface Props {
  title: string | ReactNode;
  subtitle: string | ReactNode;
  links: AppLink[];
  socials: AppSocial[];
  location: string | ReactNode;
  mail: string | ReactNode;
  mobile: string | ReactNode;
}

export default function AppFooter(props: Props) {
  return (
    <footer className="bg-slate-900 overflow-hidden">
      <div className="container mx-auto">
        <div className="pt-20 pb-20">
          <div className="grid lg:grid-cols-4 gap-10">
            <div className="col-span-2 flex flex-col gap-10">
              <div className="text-2xl text-white font-barlow font-bold">
                {props.title}
              </div>
              <div className="text-sm text-slate-400 pr-10 md:pr-40">
                {props.subtitle}
              </div>
            </div>
            <div>
              <div className="text-white text-xl font-barlow font-medium mb-5 md:mb-10">
                Links
              </div>
              <div className="flex flex-col gap-5 items-start">
                {props.links.length
                  ? props.links.map((link) => (
                      <FooterLink
                        key={link.href}
                        label={link.label}
                        href={link.href}
                      />
                    ))
                  : null}
              </div>
            </div>
            <div>
              <div className="text-white text-xl font-barlow font-medium mb-5 md:mb-10">
                Company
              </div>
              <div className="flex flex-col gap-5 items-start">
                <FooterItem icon={MdMyLocation}>{props.location}</FooterItem>
                <FooterItem icon={MdMail}>{props.mail}</FooterItem>
                <FooterItem icon={MdPhone}>{props.mobile}</FooterItem>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 py-5">
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-300">
              2015 © All Rights Reserved | Designed and Developed by
              Smarteyeapps
            </div>
            <div className="flex items-center justify-center gap-5 md:gap-5">
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
    </footer>
  );
}
