import PageTitle from "components/common/PageTitle";
import AboutCard, { AboutCardProps } from "./AboutCard";
import { ReactNode } from "react";
import useAnimationColumns from "hooks/useAnimationColumns";
import AnimatedAppear from "components/common/AnimatedAppear";
import { motion } from "framer-motion";

interface Props {
  title: string;
  cards: AboutCardProps[];
  children?: ReactNode;
}

export default function AboutLayout(props: Props) {
  const columns = useAnimationColumns({
    breakpoints: {
      768: 1,
    },
    initial: 2,
  });

  return (
    <div className="container mx-auto py-20">
      <PageTitle>About Us</PageTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {props.cards.length
          ? props.cards.map((card, index) => {
              const initialDelay = 0.5;
              let animationDelay = (index % columns) * 0.2 + initialDelay;

              return (
                <AboutCard
                  key={card.title}
                  title={card.title}
                  animationDelay={animationDelay}
                >
                  {card.children}
                </AboutCard>
              );
            })
          : null}
      </div>
      <AnimatedAppear
        hidden={{ opacity: 0 }}
        visible={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {(animate) => (
          <motion.div {...animate} className="mt-20">
            {props.children}
          </motion.div>
        )}
      </AnimatedAppear>
    </div>
  );
}
