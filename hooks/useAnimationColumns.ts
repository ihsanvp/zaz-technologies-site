import { useEffect, useState } from "react";

type GetColumnsFunction = () => number;

export default function useAnimationColumns(
  getColumns: GetColumnsFunction,
  initial: number
) {
  const [columns, setColumns] = useState(initial);

  useEffect(() => setColumns(getColumns()), [getColumns]);

  return columns;
}
