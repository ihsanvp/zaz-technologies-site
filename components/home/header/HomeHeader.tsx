import HomeHeaderBackground from "./HomeHeaderBackground";
import HomeHeaderContent from "./HomeHeaderContent";

interface Props {
  titles: string[];
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
  bg: ResponsiveImage;
  animationTime: number;
}

export default function HomeHeader(props: Props) {
  return (
    <section className="w-full pt-[80px] pb-40 relative min-h-[70vh] flex flex-col">
      <HomeHeaderBackground img={props.bg} />
      <HomeHeaderContent
        titles={props.titles}
        title={props.title}
        subtitle={props.subtitle}
        buttonText={props.buttonText}
        buttonUrl={props.buttonUrl}
        animationTime={props.animationTime}
      />
    </section>
  );
}
