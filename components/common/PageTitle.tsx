import { motion } from "framer-motion";
import { ReactNode } from "react";
import AnimatedAppear from "./AnimatedAppear";

interface Props {
  children?: ReactNode;
}

export default function PageTitle(props: Props) {
  return (
    <AnimatedAppear
      hidden={{ opacity: 0 }}
      visible={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {(animate) => (
        <motion.div {...animate} className="flex items-center justify-center">
          <h3 className="text-5xl text-center font-barlow font-bold text-blue-900 mb-20 app_underline--half">
            {props.children}
          </h3>
        </motion.div>
      )}
    </AnimatedAppear>
  );
}
