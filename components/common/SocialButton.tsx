import { AppSocial } from "types/app";

interface Props extends AppSocial {}

export default function SocialButton(props: Props) {
  return (
    <a
      className="text-slate-300 hover:text-white"
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      <props.icon size="15" />
    </a>
  );
}
