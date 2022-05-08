/* eslint-disable @next/next/no-img-element */
import { IconKey, iconsData } from "data/icons";

interface Props {
  icon: IconKey;
}

export default function AppIcon(props: Props) {
  return (
    <img
      className="object-contain w-full h-full"
      src={iconsData[props.icon]}
      alt={props.icon}
    />
  );
}
