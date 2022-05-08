import { motion } from "framer-motion";
import { ReactNode } from "react";
import AnimatedAppear from "../AnimatedAppear";

interface Props {
  children?: ReactNode;
}

export default function DividedCardLayout(props: Props) {
  return (
    <AnimatedAppear
      hidden={{ scale: 0.9, opacity: 0 }}
      visible={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      {(animate) => (
        <motion.div
          {...animate}
          className="bg-white overflow-hidden rounded-md"
        >
          <div className="grid lg:grid-cols-2">{props.children}</div>
        </motion.div>
      )}
    </AnimatedAppear>
  );
}
