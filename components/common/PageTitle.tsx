import { motion } from "framer-motion";
import { ReactNode } from "react";
import AnimatedAppear from "./AnimatedAppear";

interface Props {
  children?: ReactNode;
  subtitle?: string;
}

export default function PageTitle(props: Props) {
  return (
    <AnimatedAppear
      hidden={{ opacity: 0 }}
      visible={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {(animate) => (
        <motion.div
          {...animate}
          className="flex flex-col gap-10 items-center justify-center mb-20"
        >
          <h3 className="text-5xl text-center font-barlow font-bold text-blue-900 app_underline--half">
            {props.children}
          </h3>
          {props.subtitle ? (
            <h4 className="text-xl text-center text-slate-700">
              {props.subtitle}
            </h4>
          ) : null}
        </motion.div>
      )}
    </AnimatedAppear>
  );
}
