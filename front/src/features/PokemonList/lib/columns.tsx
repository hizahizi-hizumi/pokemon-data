import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { ImageCell } from "@/features/PokemonList/components/ImageCell";
import type { Row } from "@/features/PokemonList/types/row";

export const columns: GridColDef[] = [
  {
    field: "image",
    headerName: "",
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    width: 50,
    renderCell: (params: GridRenderCellParams<Row>) => (
      <ImageCell url={params.value} />
    ),
  },
  {
    field: "id",
    headerName: "番号",
  },
  {
    field: "name",
    headerName: "名前",
  },
];
