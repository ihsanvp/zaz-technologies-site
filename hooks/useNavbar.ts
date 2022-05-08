import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function useNavbar() {
  const router = useRouter();

  const [ref, isNotSticking] = useInView({ threshold: [1] });
  const [isOpen, setOpen] = useState(false);
  const [isHome, setHome] = useState(true);

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  function isNavbarActive() {
    if (isHome) {
      return !isNotSticking;
    }

    return true;
  }

  function isMenuOpen() {
    return isOpen;
  }

  useEffect(() => {
    if (router.route == "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [router]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  return { isNavbarActive, closeMenu, ref, openMenu, isMenuOpen };
}
