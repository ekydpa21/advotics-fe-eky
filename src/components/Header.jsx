import React from "react"

const Header = () => {
  return (
    <header className="h-16 header flex items-center justify-between pl-[2.125rem] pr-[2.0625rem] sticky top-0">
      <div className="grid grid-flow-col gap-x-2">
        <img src="/images/advotics-logo.jpg" alt="advotics-logo" width="129px" height="32px" />
        <div className="grid grid-flow-col gap-x-1 items-end">
          <p className="text-xs text-[#5B5B5B]">Powered By</p>
          <img src="/images/advotics-logo.jpg" alt="advotics-logo" width="72px" height="18px" />
        </div>
      </div>
      <div className="flex h-[33px] items-center [&>*:not(:last-child)]:mr-4">
        <div className="flex flex-col items-center">
          <h4 className="text-sm text-[#727272]">Username</h4>
          <h5 className="text-[10px] text-[#727272]">Company Name</h5>
        </div>
        <img src="icons/profile.png" alt="profile-icon" width="32px" height="32px" />
        <div className="h-[32px] w-[32px] flex justify-center items-center">
          <img src="icons/logout.png" alt="logout-icon" width="15px" height="15px" />
        </div>
      </div>
    </header>
  )
}

export default Header
