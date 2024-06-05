import React from "react";
import Avatar from "./avatar"
import MobileMenu from "./mobile-menu"
import Name from "./name"
import SocialIcons from "./social-icons"
import NavigationBar from "./navigation-bar"
import Copyright from "./copyright"

import './index.css'


const Header = () => {
  return (
    <header className="header pull-left"> 
        <MobileMenu/>
        <Avatar/>
        <Name/>
        <SocialIcons/>
        <NavigationBar/>
        <Copyright/>
    </header>
  )
}

export default Header