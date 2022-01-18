import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const {objects} = props;

  return (
    <div>
      {objects.map((object, index) => {
        return (
          <Tile key={index} object={object} />
        );
      })}
    </div>
  );
};
