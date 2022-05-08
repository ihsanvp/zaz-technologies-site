import AppButton from "components/common/Button";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

export default function HomeHeaderContent(props: Props) {
  return (
    <div className="flex-1 container mx-auto h-full pt-[70px] md:pt-0 flex flex-col justify-center ">
      <div className="flex flex-col md:flex-row gap-5 h-full">
        <div className="order-2 md:order-1 flex-1 flex flex-col justify-center gap-10">
          <motion.h1
            className="text-4xl text-center md:text-left sm:text-5xl md:text-3xl xl:text-6xl font-bold font-barlow text-white"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              type: "tween",
              ease: "easeInOut",
            }}
          >
            {props.title}
          </motion.h1>
          <motion.p
            className="lg:pr-40 text-center md:text-left text-slate-300"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.8,
              type: "tween",
              ease: "easeInOut",
            }}
          >
            {props.subtitle}
          </motion.p>
          <motion.div
            className="flex items-center justify-center md:justify-start"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1,
              type: "tween",
              ease: "easeInOut",
            }}
          >
            <AppButton href={props.buttonUrl} variant="secondary">
              {props.buttonText}
            </AppButton>
          </motion.div>
        </div>
        <div className="order-1 hidden md:flex md:order-2 flex-1 h-full items-center justify-center"></div>
      </div>
    </div>
  );
}
