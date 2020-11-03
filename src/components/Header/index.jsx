import React from "react";

import Logo from "../../assets/logo192.png";

export default function Header() {
  return (
    <nav>
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div>
    </nav>
  );
}
