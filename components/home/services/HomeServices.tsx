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
  const columns = useAnimationColumns(() => {
    if (window.innerWidth < 640) {
      return 1;
    }
    if (window.innerWidth < 1024) {
      return 2;
    }

    return 3;
  }, 3);

  console.log(columns);

  return (
    <Fragment>
      <div className="flex items-center justify-center">
        <h3 className="text-4xl 2xl:text-5xl text-blue-900 font-barlow font-bold text-center app_underline--half">
          {props.title}
        </h3>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-20">
        {props.cards.length
          ? props.cards.map((card, index) => (
              <HomeServicesCard
                transitionDelayOrder={index % columns}
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
