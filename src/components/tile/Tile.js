import React from "react";

export const Tile = (props) => {
  const {object} = props;

  return (
    <div className="tile-container">
      <p className="tile-title">{object.name || object.title}</p>
      <p className="tile">{object.phone || object.date + ' ' + object.time}</p>
      <p className="tile">{object.email || object.contact}</p>
    </div>
  );
};
