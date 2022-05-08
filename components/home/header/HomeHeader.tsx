import HomeHeaderBackground from "./HomeHeaderBackground";
import HomeHeaderContent from "./HomeHeaderContent";

interface Props {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
  bg: ResponsiveImage;
}

export default function HomeHeader(props: Props) {
  return (
    <section className="w-full pt-[80px] pb-40 relative min-h-[70vh] flex flex-col">
      <HomeHeaderBackground img={props.bg} />
      <HomeHeaderContent
        title={props.title}
        subtitle={props.subtitle}
        buttonText={props.buttonText}
        buttonUrl={props.buttonUrl}
      />
    </section>
  );
}
