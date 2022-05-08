import AppButton from "components/common/Button";
import useAnimationColumns from "hooks/useAnimationColumns";
import Link from "next/link";
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
        <h3 className="text-4xl 2xl:text-5xl text-blue-900 font-barlow font-bold text-center app_underline--half">
          {props.title}
        </h3>
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
        <AppButton href={props.buttonUrl} variant="primary">
          {props.buttonText}
        </AppButton>
      </div>
    </Fragment>
  );
}
