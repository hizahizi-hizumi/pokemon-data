import type React from "react";

import { DataGrid } from "@mui/x-data-grid";

import { useDetail } from "./hooks/useDetail";
import { columns } from "./lib/columns";

export function PokemonList(): React.JSX.Element {
  const { detail, error, isLoading } = useDetail({ id: 1 });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <DataGrid
        columns={columns}
        rows={[detail]}
        density="compact"
        showCellVerticalBorder
      />
    </>
  );
}
