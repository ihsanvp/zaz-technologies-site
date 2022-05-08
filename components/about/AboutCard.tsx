import AnimatedAppear from "components/common/AnimatedAppear";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
  animationDelay?: number;
}

export default function AboutCard(props: Props) {
  return (
    <AnimatedAppear
      hidden={{ scale: 0.9, opacity: 0 }}
      visible={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 1,
        type: "spring",
        delay: props.animationDelay || 0,
      }}
    >
      {(animate) => (
        <motion.div
          {...animate}
          className="bg-blue-900 rounded-md px-5 py-10 sm:px-10 flex flex-col gap-10 items-start"
        >
          <div className="text-4xl text-white font-medium font-barlow app_underline--full">
            {props.title}
          </div>
          <div className="flex flex-col gap-5 text-slate-100">
            {props.children}
          </div>
        </motion.div>
      )}
    </AnimatedAppear>
  );
}

export type AboutCardProps = Props;
