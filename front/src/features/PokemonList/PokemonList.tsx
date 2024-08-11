import type React from "react";

import { DataGrid } from "@mui/x-data-grid";

import { useRows } from "./hooks/useRows";
import { columns } from "./lib/columns";

export function PokemonList(): React.JSX.Element {
  const { data, error, isLoading } = useRows();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>fetch error</p>;
  }

  return (
    <>
      <DataGrid
        columns={columns}
        rows={data}
        density="compact"
        showCellVerticalBorder
      />
    </>
  );
}
