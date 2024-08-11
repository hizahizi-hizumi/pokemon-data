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
  {
    field: "hp",
    headerName: "HP",
    align: "right",
    width: 70,
  },
  {
    field: "attack",
    headerName: "攻撃",
    align: "right",
    width: 100,
  },
  {
    field: "defense",
    headerName: "防御",
    align: "right",
    width: 100,
  },
  {
    field: "specialAttack",
    headerName: "特攻",
    align: "right",
    width: 100,
  },
  {
    field: "specialDefense",
    headerName: "特防",
    align: "right",
    width: 100,
  },
  {
    field: "speed",
    headerName: "素早さ",
    align: "right",
    width: 100,
  },
];
