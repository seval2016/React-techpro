import Avatar from "./avatar"
import MobileMenu from "./mobile-menu"


const Header = () => {
  return (
    <header className="header pull-left"> 
         <MobileMenu/>
        <Avatar/>
    </header>
  )
}

export default Header