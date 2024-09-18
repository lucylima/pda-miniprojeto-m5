import "./HeaderOption.css";

function HeaderOption({ handleClick, children, icon }) {
  return (
    <li
      className="header-nav-ul-li"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <box-icon name={icon} type="solid"></box-icon>
      {children}
    </li>
  );
}

export { HeaderOption };
