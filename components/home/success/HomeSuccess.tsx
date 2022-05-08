import Image from "components/common/Image";

import bg from "assets/images/BG1.jpg";

import { IoIosPeople } from "@react-icons/all-files/io/IoIosPeople";
import HomeSuccessCard, { HomeSuccessCardProps } from "./HomeSuccessCard";

interface Props {
  bg: ResponsiveImage;
  title: string;
  cards: HomeSuccessCardProps[];
}

export default function HomeSuccess(props: Props) {
  return (
    <section className="py-20">
      <div className="py-20 relative">
        <div className="container mx-auto">
          <div className="absolute inset-0 z-[-1]">
            <Image
              className="w-full h-full object-cover"
              src={props.bg}
              alt="success-bg"
            />
          </div>
          <div className="flex items-center justify-center">
            <h3 className="text-4xl 2xl:text-5xl text-white font-barlow font-bold text-center app_underline--half">
              {props.title}
            </h3>
          </div>
          <div className="grid md:grid-cols-4 mt-20 gap-y-20 gap-x-10">
            {props.cards.length
              ? props.cards.map((card) => (
                  <HomeSuccessCard
                    key={card.title}
                    title={card.title}
                    data={card.data}
                    icon={card.icon}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}
