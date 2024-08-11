import { Outlet } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useTheme } from "@mui/material";

export default function App() {
  const theme = useTheme();

  return (
    <>
      <main
        style={{ height: "100vh", width: "100%", padding: theme.spacing(1) }}
      >
        <Outlet />
      </main>
    </>
  );
}
