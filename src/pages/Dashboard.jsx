import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"
import React from "react"
import Chart from "../components/Chart"
import FilterPeriod from "../components/FilterPeriod"
import { bestSellingSKU, productCompetitor } from "../datas/salesData"

const Dashboard = () => {
  const idrFormat = (value) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(value)
  }

  return (
    <div className="pl-[24px] pr-[32px] py-[31px]">
      <div className="flex items-center justify-between mb-[31px]">
        <h1 className="text-[2.5rem] text-[#707070C4] tracking-normal">Dashboard</h1>

        <FilterPeriod />
      </div>

      <div className="h-12 bg-[#37B04C] flex justify-between items-center px-4 py-[12px] mb-4">
        <h2 className="text-white text-xl">MARKET INSIGHTS</h2>

        <div className="flex cursor-pointer">
          <img src="icons/help.png" alt="help-icon" className="w-[20px] h-[20px] m-1" />
          <p className="underline text-white mr-4">Click Here for Help</p>
          <ChevronUpIcon className="w-[15px] text-white" />
        </div>
      </div>

      <div className="h-[104px] w-[276px] bg-white card p-4 pb-3 flex flex-col justify-between mb-4">
        <div className="flex justify-between">
          <p className="text-xs text-[#707070C4]">Sales Turnover</p>
          <img src="icons/more-icon.svg" alt="more-icon" width="12px" className="cursor-pointer" />
        </div>

        <div className="flex">
          <div>
            <h3 className="font-extrabold text-[#4D4F5C] text-2xl">Rp 3,600,000</h3>
            <div className="flex items-center [&>*:not(:last-child)]:mr-1">
              <img src="icons/down-arrow-icon.svg" alt="down-arrow-icon" width="8px" />
              <p className="text-[10px] text-[#FF4141] font-bold">13.8%</p>
              <p className="text-[10px] text-[#707070C4]">last period in products sold</p>
            </div>
          </div>

          <img src="icons/sales-turnover-icon.svg" alt="sales-turnover-icon" width="48px" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4">
        <div className="bg-white card p-4 pb-3 flex flex-col justify-between mb-4">
          <div className="flex justify-between">
            <p className="text-xl text-[#4D4F5C]">AVERAGE PURCHASE VALUE</p>
            <div className="flex">
              <div className="px-[11px] py-[9px] flex items-center h-8 bg-white chart-periode cursor-pointer mr-4">
                <p className="mr-2 text-xs">Last 6 Months</p>
                <ChevronDownIcon className="w-4" />
              </div>
              <img src="icons/more-icon.svg" alt="more-icon" width="12px" className="cursor-pointer" />
            </div>
          </div>

          {/* <div className="flex-1"> */}
          <Chart />
          {/* </div> */}
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div className="bg-white card p-4 pb-3 flex flex-col justify-between mb-4">
            <div className="flex justify-between mb-4">
              <p className="text-xl text-[#4D4F5C]">BEST SELLING SKU</p>

              <img src="icons/more-icon.svg" alt="more-icon" width="12px" className="cursor-pointer" />
            </div>

            <div className="flex flex-col  [&>*:not(:last-child)]:mb-2">
              {bestSellingSKU.map((item, index) => {
                const imageSize = index === 0 ? "80" : "60"
                const isTopProduct = index === 0 ? "top-sales-product" : "sales-product"
                const isTop = index === 0

                return (
                  <div key={index} className={`flex ${isTopProduct}`}>
                    <img src={item.image} alt={`${item.name}-image`} className={`square-image-${imageSize} mr-2`} />
                    <div className={`flex flex-col justify-center flex-1 pr-[${isTop ? "17px" : "24px"}]`}>
                      <p>{item.name}</p>
                      <div className={`flex justify-between text-${isTop ? "sm" : "xs"}  text-[#00000099]`}>
                        <p>{idrFormat(item.price)}</p>
                        <p>{item.salesAmount}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-white card p-4 pb-3 flex flex-col justify-between mb-4">
            <div className="flex justify-between mb-4">
              <p className="text-xl text-[#4D4F5C]">TOP COMPETITOR SKU</p>

              <img src="icons/more-icon.svg" alt="more-icon" width="12px" className="cursor-pointer" />
            </div>

            <div className="flex flex-col  [&>*:not(:last-child)]:mb-2">
              {productCompetitor.map((item, index) => {
                const imageSize = index === 0 ? "80" : "60"
                const isTopProduct = index === 0 ? "top-sales-product" : "sales-product"
                const isTop = index === 0

                return (
                  <div key={index} className={`flex ${isTopProduct}`}>
                    <img src={item.image} alt={`${item.name}-image`} className={`square-image-${imageSize} mr-2`} />
                    <div className={`flex flex-col justify-center flex-1`}>
                      <p>{item.name}</p>
                      <div className={`flex justify-between text-${isTop ? "sm" : "xs"}  text-[#00000099]`}>
                        <p>{idrFormat(item.price)}</p>
                        <p>{item.salesAmount}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
