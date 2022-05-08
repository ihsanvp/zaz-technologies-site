import classNames from "classnames";
import AnimatedAppear from "components/common/AnimatedAppear";
import PageTitle from "components/common/PageTitle";
import { motion } from "framer-motion";
import useAnimationColumns from "hooks/useAnimationColumns";
import ServicesDisplayCard, {
  ServicesDisplayCardProps,
} from "./ServicesDisplayCard";

interface Props {
  title: string;
  cards: ServicesDisplayCardProps[];
}

export default function ServicesLayout(props: Props) {
  const columns = useAnimationColumns({
    breakpoints: {
      768: 1,
    },
    initial: 2,
  });

  return (
    <div className="container mx-auto py-20">
      <PageTitle>{props.title}</PageTitle>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5 lg:gap-10">
        {props.cards.length
          ? props.cards.map((card, index) => {
              let animationDelay = (index % columns) * 0.2;
              const initialDelay = 0.5;

              if (
                (columns == 1 && index == 0) ||
                (columns == 2 && index == 0) ||
                (columns == 2 && index == 1)
              ) {
                animationDelay += initialDelay;
              }

              if (index == props.cards.length - 1) {
                return (
                  <div
                    key={card.title}
                    className="col-span-2 flex items-center justify-center"
                  >
                    <ServicesDisplayCard
                      title={card.title}
                      content={card.content}
                      icon={card.icon}
                      image={card.image}
                      className="md:max-w-[500px] 2xl:max-w-[700px]"
                      animationDelay={animationDelay}
                    />
                  </div>
                );
              }

              return (
                <ServicesDisplayCard
                  key={card.title}
                  title={card.title}
                  content={card.content}
                  icon={card.icon}
                  image={card.image}
                  animationDelay={animationDelay}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
