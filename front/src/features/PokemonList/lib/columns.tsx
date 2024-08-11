import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { ImageCell } from "@/features/PokemonList/components/ImageCell";
import type { Row } from "@/features/PokemonList/types/row";
import { Types } from "../components/Types";

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
    headerName: "図鑑No",
    align: "right",
    width: 70,
  },
  {
    field: "name",
    headerName: "名前",
    width: 110,
  },
  {
    field: "types",
    headerName: "タイプ",
    renderCell: (params: GridRenderCellParams<Row>) => (
      <Types types={params.value} />
    ),
  },
];
