import "boxicons";
import './Header.css'
function Header() {
  const handleClick = () => {
    
  }

  return (
    <header className="header">
      <h2 className="header-logo">RMUS</h2>
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <li className="header-nav-ul-li" onClick={handleClick}>
            <box-icon name="music" type="solid"></box-icon>
            Song
          </li>
          <li className="header-nav-ul-li" onClick={handleClick}>
            <box-icon name="user" type="solid"></box-icon>
            Artist
          </li>
          <li className="header-nav-ul-li" onClick={handleClick}>
            <box-icon name="album" type="solid"></box-icon>
            Album
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
