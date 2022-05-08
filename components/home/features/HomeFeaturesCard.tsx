import { IconType } from "@react-icons/all-files";
import AnimatedAppear from "components/common/AnimatedAppear";
import { motion } from "framer-motion";

interface Props {
  animationDelay?: number;
  title: string;
  content: string;
  icon: IconType;
}

export default function HomeFeaturesCard(props: Props) {
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
        delay: props.animationDelay || 0,
        type: "spring",
      }}
    >
      {(animate) => (
        <motion.div
          {...animate}
          className="w-full px-5 py-10 sm:px-7 sm:py-10 xl:py-10 md:px-10 bg-white rounded-md"
        >
          <div className="w-full flex flex-col items-center justify-center gap-5 lg:gap-10">
            <div className="p-3 flex items-center justify-center rounded-md text-white bg-blue-900">
              <props.icon size="30" />
            </div>
            <div className="text-xl 2xl:text-2xl text-center text-blue-900 font-bold font-barlow app_underline--half">
              {props.title}
            </div>
            <div className="text-center text-slate-600">{props.content}</div>
          </div>
        </motion.div>
      )}
    </AnimatedAppear>
  );
}

export type HomeFeaturesCardProps = Props;
