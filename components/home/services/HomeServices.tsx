import AnimatedAppear from "components/common/AnimatedAppear";
import AppButton from "components/common/Button";
import { motion } from "framer-motion";
import useAnimationColumns from "hooks/useAnimationColumns";
import { Fragment } from "react";
import HomeServicesCard, { HomeServicesCardProps } from "./HomeServicesCard";

interface Props {
  title: string;
  cards: HomeServicesCardProps[];
  buttonText: string;
  buttonUrl: string;
}

export default function HomeServices(props: Props) {
  const columns = useAnimationColumns({
    breakpoints: {
      640: 1,
      1024: 2,
    },
    initial: 3,
  });

  return (
    <Fragment>
      <div className="flex items-center justify-center">
        <AnimatedAppear
          hidden={{ scale: 0.9, opacity: 0 }}
          visible={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          {(animate) => (
            <motion.h3
              {...animate}
              className="text-4xl 2xl:text-5xl text-blue-900 font-barlow font-bold text-center app_underline--half"
            >
              {props.title}
            </motion.h3>
          )}
        </AnimatedAppear>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-10 mt-20">
        {props.cards.length
          ? props.cards.map((card, index) => (
              <HomeServicesCard
                animationDelay={(index % columns) * 0.2}
                key={card.title}
                title={card.title}
                content={card.content}
                icon={card.icon}
              />
            ))
          : null}
      </div>
      <div className="flex items-center justify-center py-10">
        <AnimatedAppear
          hidden={{ scale: 0.9, opacity: 0, y: 40 }}
          visible={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          {(animate) => (
            <motion.div {...animate} className="flex">
              <AppButton href={props.buttonUrl} variant="primary">
                {props.buttonText}
              </AppButton>
            </motion.div>
          )}
        </AnimatedAppear>
      </div>
    </Fragment>
  );
}
