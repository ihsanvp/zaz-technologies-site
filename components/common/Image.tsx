/* eslint-disable @next/next/no-img-element */

interface Props {
  src: ResponsiveImage;
  className?: string;
  alt?: string;
  sizes?: string;
}

export default function Image(props: Props) {
  return (
    <img
      className={props.className}
      src={props.src.src}
      srcSet={props.src.srcSet}
      width={props.src.width}
      height={props.src.height}
      alt={props.alt}
      sizes={props.sizes}
    />
  );
}
