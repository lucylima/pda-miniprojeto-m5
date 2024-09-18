import "boxicons";
import "./Header.css";
import { useState } from "react";
import { HeaderOption } from "../HeaderOption/HeaderOption.jsx";
function Header() {
  const [txt, setTxt] = useState("RMUS");
  function getName(e) {
    setTxt(e.target.innerText);
  }
  return (
    <header className="header">
      <h2 className="header-logo">{txt}</h2>
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <HeaderOption icon="music" handleClick={getName}>
            Song
          </HeaderOption>
          <HeaderOption icon="user" handleClick={getName}>
            Artist
          </HeaderOption>
          <HeaderOption icon="album" handleClick={getName}>
            Album
          </HeaderOption>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
