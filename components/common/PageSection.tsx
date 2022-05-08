import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

export default function PageSection(props: Props) {
  return (
    <section className={classNames("py-20", props.className)}>
      <div className="container mx-auto">{props.children}</div>
    </section>
  );
}
