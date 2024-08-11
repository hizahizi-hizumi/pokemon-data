import type { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "番号",
  },
  {
    field: "name",
    headerName: "名前",
  },
  {
    field: "image",
    headerName: "画像",
    renderCell: (params) => {
      return <img src={params.value} alt="" />;
    },
  },
];
