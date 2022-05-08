import { useEffect, useState } from "react";

interface Props {
  children: () => JSX.Element;
  initialColumns: number;
  getCurrentColumns: () => number;
}

export default function AnimatedAppearGroup({
  getCurrentColumns,
  ...props
}: Props) {
  const [columns, setColumns] = useState(props.initialColumns);

  useEffect(() => {
    setColumns(getCurrentColumns());
  }, [getCurrentColumns]);

  return props.children();
}
