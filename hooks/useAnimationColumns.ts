import { useEffect, useState } from "react";

type ColumnBreakPointType = `${number}`;
type ColumnBreakPoints = { [key in ColumnBreakPointType]: number };
type Options = {
  breakpoints: ColumnBreakPoints;
  initial: number;
};

export default function useAnimationColumns({ initial, breakpoints }: Options) {
  const [columns, setColumns] = useState(initial);

  useEffect(() => {
    let col = initial;

    const keys = Object.keys(breakpoints).sort(
      (a, b) => Number(a) - Number(b)
    ) as ColumnBreakPointType[];

    for (const breakpoint of keys) {
      if (window.innerWidth < Number(breakpoint)) {
        col = breakpoints[breakpoint];
        break;
      }
    }

    setColumns(col);
  }, [breakpoints, initial]);

  return columns;
}
