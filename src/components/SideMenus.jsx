import React from "react"
import { MenuAlt2Icon } from "@heroicons/react/outline"

const SideMenus = () => {
  return (
    <aside className="w-[72px] aside-border flex flex-col items-center py-0 ">
      <div className="px-[24px] py-[14px] w-full">
        <MenuAlt2Icon className="w-[30px] text-[#C5C5C5]" />
      </div>
      <div className="px-[24px] py-[14px] bg-[#D2D2D2] w-full">
        <div className="h-[21px] w-[24px] bg-white rounded flex justify-center items-center">
          <img src="icons/dashboard-icon.svg" alt="dashboard-icon" width="17px" height="17px" />
        </div>
      </div>
    </aside>
  )
}

export default SideMenus
