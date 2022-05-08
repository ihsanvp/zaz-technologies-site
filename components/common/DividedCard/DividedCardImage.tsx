import Image from "components/common/Image";

interface Props {
  img: ResponsiveImage;
}

export default function DividedCardImage(props: Props) {
  return (
    <div className="order-1 lg:order-none flex w-full h-full overflow-hidden relative">
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={props.img}
          alt="about"
          sizes="40vw"
          className="w-full h-full object-cover"
        />
      </div>
      <Image
        src={props.img}
        alt="about"
        sizes="40vw"
        className="w-full h-full object-cover lg:hidden"
      />
    </div>
  );
}
