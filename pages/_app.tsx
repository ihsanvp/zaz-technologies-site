import "../styles/globals.css";

import type { AppProps } from "next/app";

import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";
import NextNProgress from "nextjs-progressbar";
import TopBanner from "components/banner/TopBanner";
import AppNavbar from "components/navbar/AppNavbar";

import logoImage from "assets/images/logo.jpg";

import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AppLink, AppSocial } from "types/app";
import AppFooter from "components/footer/AppFooter";

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
    url: "",
    icon: FaFacebook,
  },
  {
    url: "",
    icon: FaTwitter,
  },
  {
    url: "",
    icon: AiFillInstagram,
  },
];

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Fragment>
      <NextNProgress color="rgb(15 23 42)" options={{ showSpinner: false }} />
      <div className="flex flex-col items-stretch min-h-screen">
        <AnimatePresence>
          <TopBanner
            mobile="98722736561"
            mail="smtp@mail.com"
            socials={SOCIALS}
          />
          <AppNavbar logo={logoImage} links={LINKS} />
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
              Z A Z PLUS <br /> TECHNOLOGIES
            </Fragment>
          }
          subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe atque ab quidem perferendis eligendi, vitae iure labore tempore suscipit eos?"
          links={LINKS}
          socials={SOCIALS}
          location="BlueDart Marthandam (K.K District) Tamil Nadu, IND"
          mail={
            <Fragment>
              info@smarteyeapps.com <br />
              sales@smarteyeapps.com
            </Fragment>
          }
          mobile={
            <Fragment>
              +23 323 43434 <br />
              +1 3232 434 55
            </Fragment>
          }
        />
      </div>
    </Fragment>
  );
}

export default MyApp;
