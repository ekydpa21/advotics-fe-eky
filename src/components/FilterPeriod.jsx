import { ChevronDownIcon, XIcon } from "@heroicons/react/outline"
import moment from "moment"
import React, { useRef, useState } from "react"
import useOnClickOutside from "../hooks/useOnClickOutside"
import Calendar from "./Calendar"

const FilterPeriod = () => {
  const dateToday = moment().format("D")
  const today = moment().format("YYYY-M-D")
  const fullDateName = moment().format("D MMMM YYYY")
  const listFilterChoices = ["Today", "Yesterday", "Last 7 days", "Last 30 days", "This Month", "Custom"]
  const [filterOpen, setFilterOpen] = useState(false)
  const [activedFilter, setActivedFilter] = useState("Today")

  const handlerOpenFilter = (e) => {
    setFilterOpen((prevStatus) => !prevStatus)
  }

  const [startDate, setStartDate] = useState({
    fullDateName: fullDateName,
    formatedDate: today,
  })
  const [endDate, setEndDate] = useState({
    fullDateName: fullDateName,
    formatedDate: today,
  })
  const [highlightPeriod, setHighlightPeriod] = useState(`${startDate?.fullDateName} - ${endDate?.fullDateName}`)

  const handleStartDate = (value) => {
    setStartDate(value)
  }
  const handleEndDate = (value) => {
    setEndDate(value)
  }

  const handleSelectFilter = (filterValue) => {
    setActivedFilter(filterValue)
    const listPeriod = { Today: { start: 0, end: 0 }, Yesterday: { start: 1, end: 1 }, "Last 7 days": { start: 7, end: 1 }, "Last 30 days": { start: 30, end: 1 }, "This Month": { start: +dateToday - 1, end: 0 }, Custom: "" }

    setStartDate({
      fullDateName: moment().subtract(listPeriod[filterValue].start, "days").format("D MMMM YYYY"),
      formatedDate: moment().subtract(listPeriod[filterValue].start, "days").format("YYYY-M-D"),
    })
    setEndDate({
      fullDateName: moment().subtract(listPeriod[filterValue].end, "days").format("D MMMM YYYY"),
      formatedDate: moment().subtract(listPeriod[filterValue].end, "days").format("YYYY-M-D"),
    })
  }

  const handleApplyFilter = () => {
    setHighlightPeriod(`${startDate?.fullDateName} - ${endDate?.fullDateName}`)
    handlerOpenFilter()
  }

  const ref = useRef(document.createElement("div"))
  useOnClickOutside(ref, () => {
    setFilterOpen((prevStatus) => !prevStatus)
  })

  return (
    <div className="relative">
      <div className="px-[17px] py-[13px] flex h-12 bg-white periode cursor-pointer" onClick={handlerOpenFilter}>
        <img src="icons/calendar.png" alt="calendar" width="22px" height="22px" className="mr-4" />
        <p className="mr-[24px]">Period</p>
        <p className="mr-4">{highlightPeriod}</p>
        <ChevronDownIcon className="w-4" />
      </div>

      {filterOpen && (
        <div className="w-max filter-periode [&>*:not(:last-child)]:mb-6" ref={ref}>
          {/* header */}
          <div className="flex justify-between">
            <div className="flex">
              <img src="icons/calendar.png" alt="calendar" width="22px" height="22px" className="mr-2" />
              <p className="mr-[24px] font-semibold">Period</p>
            </div>

            <XIcon className="w-6 h-6 cursor-pointer" onClick={handlerOpenFilter} />
          </div>

          {/* main filter */}
          <div className="flex">
            {/* Left */}
            <div className="w-36">
              <div className="[&>*:not(:last-child)]:mb-4">
                {listFilterChoices.map((choice, index) => {
                  const lastItem = index === listFilterChoices.length - 1
                  const filterActive = activedFilter === choice && "text-[#39B24B] font-bold"

                  return (
                    <div className={`h-8 flex flex-col justify-between cursor-pointer ${filterActive}`} key={index} onClick={() => handleSelectFilter(choice)}>
                      <p className="text-sm">{choice}</p>

                      {!lastItem && <hr className="bg-[#BDBEC0] h-[1.5px]" />}
                    </div>
                  )
                })}
              </div>
              <button className="bg-[#37B04C] w-full px-4 py-2 text-white rounded mt-2" onClick={handleApplyFilter}>
                Apply
              </button>
            </div>

            <div className="w-[1px] bg-[#BDBEC0] mx-6" />

            {/* Right */}
            <div className="flex  [&>*:not(:last-child)]:mr-6">
              <Calendar handleValue={handleStartDate} value={startDate} />
              <Calendar handleValue={handleEndDate} value={endDate} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterPeriod
