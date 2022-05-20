import { Fragment } from "react";

import useNavbar from "hooks/useNavbar";
import Bar from "./Bar";
import Menu from "./Menu";
import { AppLink, AppSocial } from "types/app";

interface Props {
  logo: ResponsiveImage;
  links: AppLink[];
  socials: AppSocial[];
}

export default function AppNavbar(props: Props) {
  const navbar = useNavbar();

  return (
    <Fragment>
      <Bar
        onMount={navbar.ref}
        openMenu={navbar.openMenu}
        active={navbar.isNavbarActive()}
        logo={props.logo}
        links={props.links}
      />
      <Menu
        closeMenu={navbar.closeMenu}
        open={navbar.isMenuOpen()}
        links={props.links}
        socials={props.socials}
      />
    </Fragment>
  );
}
