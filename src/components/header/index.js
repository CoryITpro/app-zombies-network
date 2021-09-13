import { Link, useLocation } from "react-router-dom"
import "./style.scss"

import { Routes } from "configurations"
import LOGO from "resources/logo.png"

const Header = ({ currentPath }) => {
  const { pathname } = useLocation()

  return (
    <div className="header flex">
      <Link to={{ pathname: "https://zombies.network" }} target="_blank">
        <img src={LOGO} alt="logo" />
      </Link>
      <div className="header-navbar flex">
        <Link
          className={`flex ${pathname === Routes.STARTER_PACK && "current"}`}
          to={Routes.STARTER_PACK}
        >
          Starter Pack
        </Link>
        <Link
          className={`flex ${pathname === Routes.MARKETPLACE && "current"}`}
          to={Routes.MARKETPLACE}
        >
          Marketplace
        </Link>
        <Link
          className={`flex ${pathname === Routes.MY_ZOMB && "current"}`}
          to={Routes.MY_ZOMB}
        >
          My Zomb
        </Link>
        <Link
          className={`flex ${pathname === Routes.MIGRATION && "current"}`}
          to={Routes.MIGRATION}
        >
          Migration
        </Link>
        <Link
          className={`flex ${pathname === Routes.FIGHT_MONSTER && "current"}`}
          to={Routes.FIGHT_MONSTER}
        >
          Fight Monster
        </Link>
        <Link
          className={`flex ${pathname === Routes.HELP && "current"}`}
          to={Routes.HELP}
        >
          Help
        </Link>
      </div>
      <div className="header-wallet flex">
        <button>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Header
