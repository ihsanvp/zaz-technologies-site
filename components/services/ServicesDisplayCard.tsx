import classNames from "classnames";
import AnimatedAppear from "components/common/AnimatedAppear";
import AppIcon from "components/common/AppIcon";
import Image from "components/common/Image";

import { IconKey } from "data/icons";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  image: ResponsiveImage;
  icon: IconKey;
  title: string;
  content: string;
  className?: string;
  animationDelay?: number;
}
export default function ServicesDisplayCard(props: Props) {
  return (
    <AnimatedAppear
      hidden={{
        opacity: 0,
        y: 100,
      }}
      visible={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        type: "spring",
        delay: props.animationDelay || 0,
      }}
    >
      {(animate) => (
        <motion.div
          {...animate}
          className={classNames(
            "bg-white rounded-md overflow-hidden flex flex-col",
            props.className
          )}
        >
          <div className="w-full h-[60vw] md:h-[300px] xl:h-[400px] relative flex flex-col items-center">
            <Image
              className="w-full h-full object-cover"
              src={props.image}
              alt={props.title}
            />
            <div className="absolute bottom-[-40px] w-[80px] h-[80px] rounded-full p-4 bg-white border-yellow-500 border-[3px]">
              <AppIcon icon={props.icon} />
            </div>
          </div>
          <div className="px-5 sm:px-10 py-10 pt-20 flex flex-col items-center gap-10">
            <div className="text-blue-900 text-2xl font-bold text-center font-barlow relative before:absolute before:inset-0 before:scale-50 before:origin-center before:-bottom-2 before:top-auto before:bg-yellow-500 before:h-[3px]">
              {props.title}
            </div>
            <p className="text-center">{props.content}</p>
          </div>
        </motion.div>
      )}
    </AnimatedAppear>
  );
}

export type ServicesDisplayCardProps = Props;
