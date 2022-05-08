import { HTMLInputTypeAttribute } from "react";

interface Props {
  label: string;
  children: (props: PropertiesType) => JSX.Element;
}

type PropertiesType = {
  required: boolean;
  id: string;
  name: string;
  className: string;
};

export default function InputField(props: Props) {
  const properties: PropertiesType = {
    required: true,
    id: props.label,
    name: props.label,
    className:
      "peer border border-slate-300 rounded px-5 py-2 text-slate-700 outline-none focus:border-blue-900",
  };

  return (
    <label className="flex flex-col-reverse gap-1" htmlFor={props.label}>
      {props.children(properties)}
      <span className="text-sm text-slate-600 peer-focus:text-blue-900">
        {props.label}
      </span>
    </label>
  );
}
