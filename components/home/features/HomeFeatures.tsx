import useAnimationColumns from "hooks/useAnimationColumns";
import HomeFeaturesCard, { HomeFeaturesCardProps } from "./HomeFeaturesCard";

interface Props {
  cards: HomeFeaturesCardProps[];
}

export default function HomeFeatures(props: Props) {
  const columns = useAnimationColumns({
    breakpoints: {
      768: 1,
    },
    initial: 3,
  });

  return (
    <section className="-mt-16 z-[5] relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-5">
          {props.cards.length
            ? props.cards.map((card, index) => (
                <HomeFeaturesCard
                  key={card.title}
                  animationDelay={(index % columns) * 0.2}
                  title={card.title}
                  icon={card.icon}
                />
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
