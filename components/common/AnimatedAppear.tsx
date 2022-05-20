import {
  AnimationControls,
  Transition,
  useAnimation,
  Variant,
  Variants,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children: (props: Properties) => JSX.Element;
  hidden: Variant;
  visible: Variant;
  transition?: Transition;
}

type RefType = (node?: Element | null | undefined) => void;
type Properties = {
  ref: RefType;
  initial: string;
  animate: AnimationControls;
  variants: Variants;
  transition: Transition | undefined;
};

export default function AnimatedAppear(props: Props) {
  const controls = useAnimation();

  const [ref, showing] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
    initialInView: false,
  });

  useEffect(() => {
    if (showing) {
      controls.start("visible");
    }
  }, [showing, controls]);

  return props.children({
    ref,
    initial: "hidden",
    animate: controls,
    transition: props.transition,
    variants: {
      hidden: props.hidden,
      visible: props.visible,
    },
  });
}
