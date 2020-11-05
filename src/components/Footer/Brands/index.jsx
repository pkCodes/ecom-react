import React from "react";

export default function CopyRights({ brands }) {
  return (
    <div className="site-brands">
      {brands.map((b) => (
        <span className="brand">{b.name}</span>
      ))}
    </div>
  );
}
