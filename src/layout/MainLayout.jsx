import React from "react"
import Header from "../components/Header"
import SideMenus from "../components/SideMenus"

const MainLayout = ({ children }) => {
  return (
    <div className="grid grid-rows-main-layout h-screen ">
      <Header />
      <main className="grid grid-cols-main-layout h-full overflow-hidden">
        <SideMenus />
        <section className="flex-1 bg-[#F7F7F7] overflow-auto">{children}</section>
      </main>
    </div>
  )
}

export default MainLayout
