import "../styles/globals.css";

import type { AppProps } from "next/app";

import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import TopBanner from "components/banner/TopBanner";
import AppNavbar from "components/navbar/AppNavbar";

import logoImage from "assets/images/logo-dark.png";
import groupCompanyLogo from "assets/images/PGBS LOGO.png";

import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { IoLogoWhatsapp } from "@react-icons/all-files/io/IoLogoWhatsapp";
import { AppLink, AppSocial } from "types/app";
import AppFooter from "components/footer/AppFooter";
import contactData from "data/contact";

const LINKS: AppLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const SOCIALS: AppSocial[] = [
  {
    url:
      // `https://wa.me/+917994152171?text=${encodeURIComponent(
      //   "I'd like to chat with you"
      // )}`
      "",
    icon: IoLogoWhatsapp,
  },
  {
    url: "https://www.google.com/search?q=facebook",
    icon: FaFacebook,
  },
  {
    url: "https://www.google.com/search?q=twitter",
    icon: FaTwitter,
  },
  {
    url: "https://www.google.com/search?q=instagram",
    icon: AiFillInstagram,
  },
];

function MyApp({ Component, pageProps, router }: AppProps) {
  function renderDetails(data: string, index: number, max: number) {
    if (index != max) {
      return (
        <Fragment key={index}>
          <span>{data}</span>
          <hr className="my-2 border-slate-700" />
        </Fragment>
      );
    }

    return <span key={index}>{data}</span>;
  }

  useEffect(() =>
    console.log(
      "%cDesign & Code by www.studiotwofour.com",
      "color: white; background-color: rebeccapurple; padding: 10px; margin: 20px 0;"
    )
  );

  return (
    <Fragment>
      <NextNProgress color="rgb(15 23 42)" options={{ showSpinner: false }} />
      <div className="flex flex-col items-stretch min-h-screen">
        <AnimatePresence>
          <TopBanner
            key="banner"
            mobile={contactData.mobiles[0]}
            mail={contactData.mails[0]}
            socials={SOCIALS}
          />
          <AppNavbar
            logo={logoImage}
            key="navbar"
            links={LINKS}
            socials={SOCIALS}
          />
        </AnimatePresence>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.main
            key={router.route}
            className="flex-1"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
        <AppFooter
          title={
            <Fragment>
              ZAZ PLUS <br /> TECHNOLOGIES
            </Fragment>
          }
          groupLogo={groupCompanyLogo}
          subtitle={`Complete solution for CCTV Security Systems, ICT and IT Infrastructure, to provide exclusive and full-fledged Security Systems and infrastructure support to our customers.`}
          links={LINKS}
          socials={SOCIALS}
          location={
            <Fragment>
              {contactData.locations.length
                ? contactData.locations.map((loc, index) =>
                    renderDetails(loc, index, contactData.locations.length - 1)
                  )
                : null}
            </Fragment>
          }
          mail={
            <Fragment>
              {contactData.mails.length
                ? contactData.mails.map((loc, index) =>
                    renderDetails(loc, index, contactData.mails.length - 1)
                  )
                : null}
            </Fragment>
          }
          mobile={
            <Fragment>
              {contactData.mobiles.length
                ? contactData.mobiles.map((loc, index) =>
                    renderDetails(loc, index, contactData.mobiles.length - 1)
                  )
                : null}
            </Fragment>
          }
        />
      </div>
    </Fragment>
  );
}

export default MyApp;
