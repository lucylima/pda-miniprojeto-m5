import './HeaderOption.css'

function HeaderOption({ handleClick, children, icon }) {
  return (
    <li className="header-nav-ul-li">
      <box-icon className="boxicon" name={icon} type="solid"></box-icon>
      <span
        onClick={(e) => {
          handleClick(e)
        }}
      > 
        {children}
      </span>
    </li>
  )
}

export { HeaderOption }
