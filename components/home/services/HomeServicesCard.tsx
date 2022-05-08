import AnimatedAppear from "components/common/AnimatedAppear";
import AppIcon from "components/common/AppIcon";
import { IconKey } from "data/icons";
import { motion } from "framer-motion";

interface Props {
  transitionDelayOrder?: number;
  title: string;
  content: string;
  icon: IconKey;
}

export default function HomeServicesCard(props: Props) {
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
        delay: (props.transitionDelayOrder || 0) * 0.2,
        type: "spring",
      }}
    >
      {(animate) => (
        <motion.div
          {...animate}
          className="w-full px-5 py-20 sm:px-7 sm:py-10 xl:py-20 md:px-10 bg-white rounded-md"
        >
          <div className="w-full flex flex-col items-center justify-center gap-5 lg:gap-10">
            <div className="flex items-center justify-center rounded-sm w-[50px] h-[50px]">
              <AppIcon icon={props.icon} />
            </div>
            <div className="text-xl 2xl:text-2xl text-center text-blue-900 font-bold font-barlow">
              {props.title}
            </div>
            <div className="text-center text-slate-600">{props.content}</div>
          </div>
        </motion.div>
      )}
    </AnimatedAppear>
  );
}

export type HomeServicesCardProps = Props;
