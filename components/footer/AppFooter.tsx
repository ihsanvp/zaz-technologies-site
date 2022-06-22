import { MdMyLocation } from "@react-icons/all-files/md/MdMyLocation";
import { MdMail } from "@react-icons/all-files/md/MdMail";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";
import { AppLink, AppSocial } from "types/app";
import SocialButton from "components/common/SocialButton";
import FooterItem from "./FooterItem";
import FooterLink from "./FooterLink";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import Image from "components/common/Image";

import logo from "assets/images/logo-light.png";

interface Props {
  title: string | ReactNode;
  subtitle: string | ReactNode;
  links: AppLink[];
  socials: AppSocial[];
  location: string | ReactNode;
  mail: string | ReactNode;
  mobile: string | ReactNode;
  groupLogo: ResponsiveImage;
}

export default function AppFooter(props: Props) {
  return (
    <footer className="bg-slate-900 overflow-hidden">
      <div className="container mx-auto">
        <div className="pt-20 pb-20">
          <div className="grid md:grid-cols-5 gap-x-10 gap-y-20">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-10">
              <div className="w-[200px]">
                <Image className="w-full object-cover" src={logo} alt="logo" />
              </div>
              <div className="text-slate-400 pr-10">{props.subtitle}</div>
              <div className="flex flex-col mt-5 gap-3">
                <div className="text-lg text-slate-200 font-barlow">
                  Our Group Company
                </div>
                <a
                  href="https://primedubai.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={props.groupLogo} alt="group-company" />
                </a>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <div className="text-white text-xl font-barlow font-medium mb-5 md:mb-10">
                Company
              </div>
              <div className="flex flex-col gap-5 items-start">
                <FooterItem icon={MdMyLocation}>{props.location}</FooterItem>
                <FooterItem icon={MdMail}>{props.mail}</FooterItem>
                <FooterItem icon={MdPhone}>{props.mobile}</FooterItem>
                <div className="flex flex-col mt-5 gap-3">
                  <div className="text-lg text-slate-200 font-barlow">
                    Our Retail Shop
                  </div>
                  <div className="text-slate-400">
                    Al Waha street, Al Quoz Dubai, UAE
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
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
          </div>
        </div>
        <div className="border-t border-slate-700 py-5">
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-300">
              2020 © All Rights Reserved
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
