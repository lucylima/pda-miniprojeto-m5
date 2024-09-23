import "boxicons";
import "./Header.css";
import { useState } from "react";
import { HeaderOption } from "../HeaderOption/HeaderOption.jsx";
function Header({ handleClick }) {
  const [txt, setTxt] = useState("RMUS");
  return (
    <header className="header">
      <h2 className="header-logo">{txt}</h2>
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <HeaderOption icon="music" handleClick={handleClick}>
            Song
          </HeaderOption>
          <HeaderOption icon="user" handleClick={handleClick}>
            Artist
          </HeaderOption>
          <HeaderOption icon="album" handleClick={handleClick}>
            Album
          </HeaderOption>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
