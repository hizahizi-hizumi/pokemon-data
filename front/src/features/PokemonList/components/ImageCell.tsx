import type React from "react";

interface ImageCellProps {
  url: string | undefined;
}

export function ImageCell(props: ImageCellProps): React.JSX.Element {
  const { url } = props;

  return (
    <>
      <img
        src={url}
        alt=""
        style={{ height: "100%", marginLeft: "-10px", marginRight: "-10px" }}
      />
    </>
  );
}
