import Account from "components/layout/app/navbar/Account"
import NavbarList from "components/layout/app/navbar/NavbarList"
import { navbarRoutes } from "routes"
import SimpleBar from "simplebar-react"
import Logo from "components/layout/app/navbar/Logo.tsx"
import { LayoutGroup } from "framer-motion"

export default function Navbar() {
  return (
    <div className="z-10 flex h-screen flex-col shadow-lg">
      <Logo />
      <SimpleBar className="flex-1 overflow-y-auto px-4">
        <LayoutGroup>
          <NavbarList items={navbarRoutes.top} isRoot />
        </LayoutGroup>
      </SimpleBar>
      {/*<div className="mb-6">*/}
      {/*  <NavbarList items={navbarRoutes.bottom} />*/}
      {/*</div>*/}
      <Account />
    </div>
  )
}
