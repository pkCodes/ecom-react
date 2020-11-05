import React from "react";

export default function Spinner({ show }) {
  const cls = ["spinner-backdrop"];

  if (show) cls.push("show");

  return (
    <div className={cls.join(" ")}>
      <div className="spinner" />
    </div>
  );
}
