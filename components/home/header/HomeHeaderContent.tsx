import AppButton from "components/common/Button";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  titles: string[];
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
  animationTime: number;
}

export default function HomeHeaderContent(props: Props) {
  const initialRender = useRef(true);
  const interval = useRef<NodeJS.Timer>();
  const [activeTitleIndex, cycleTitle] = useCycle(
    ...new Array(props.titles.length).fill(0).map((_, i) => i)
  );

  useEffect(() => {
    interval.current = setInterval(() => cycleTitle(), props.animationTime);
    initialRender.current = false;

    return () => {
      interval.current ?? clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="flex-1 container mx-auto h-full pt-[70px] md:pt-0 flex flex-col justify-center ">
      <div className="flex flex-col md:flex-row gap-5 h-full">
        <div className="order-2 md:order-1 flex-1 flex flex-col justify-center gap-10">
          <div className="overflow-hidden h-32 md:h-20 xl:h-48 flex flex-col justify-center relative">
            <AnimatePresence exitBeforeEnter>
              <motion.h1
                key={activeTitleIndex}
                className="text-4xl text-center md:text-left sm:text-5xl md:text-3xl xl:text-6xl font-bold font-barlow text-white absolute"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{
                  duration: 0.7,
                  delay: initialRender.current ? 0.6 : 0,
                  type: "tween",
                  ease: "easeInOut",
                }}
              >
                {props.titles[activeTitleIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
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
