import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import React, { useEffect, useState } from "react"
import { monthName } from "../datas/monthName"
import useCalendar from "../hooks/useCalendar"
import { formatDate } from "../utils/dateFormater"
import moment from "moment"

const daysShortArr = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

monthName

const Calendar = ({ handleValue, value }) => {
  const startingMonth = new Date(moment(value.formatedDate).format("YYYY, M, 1"))
  const { calendarRows, selectedDate, getNextMonth, getPrevMonth, goToMonth } = useCalendar(startingMonth)

  useEffect(() => {
    goToMonth(startingMonth)
  }, [value])

  const currentMonthName = monthName[selectedDate.getMonth()]
  const currentYear = selectedDate.getFullYear()

  const handleSelectDate = (value) => {
    handleValue(value)
  }

  return (
    <div className="w-60 flex flex-col [&>*:not(last-child)]:mb-4">
      {/* Button Next or Prev Month */}
      <div className="flex justify-between">
        {/* Prev Button */}
        <button onClick={getPrevMonth}>
          <ChevronLeftIcon className="w-4 h-4" />
        </button>

        <h4>{`${currentMonthName} ${currentYear}`}</h4>

        {/* Next Button */}
        <button onClick={getNextMonth}>
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Days */}
      <div>
        <div className="flex justify-between">
          {daysShortArr.map((day, index) => {
            return (
              <div key={index} className="w-8 h-8 flex justify-center text-[#8F8F8F] text-sm font-bold">
                <p>{day}</p>
              </div>
            )
          })}
        </div>
        <hr className="bg-[#8F8F8F]" />
      </div>

      <div>
        {/* Dates */}
        <div>
          {Object.values(calendarRows).map((cols, index) => {
            return (
              <div key={index} className={`flex justify-between [&>*:not(last-child)]:mb-2`}>
                {cols.map((col) => {
                  const { classes, date, valueYear, valueMonth, valueDate } = col
                  const hideDate = classes.length > 0 && "hide-date"
                  const selectedBG = value?.formatedDate === date && "selected-date"
                  const fullDate = new Date(valueYear, valueMonth - 1, valueDate)

                  return (
                    <div
                      key={date}
                      className={`flex w-8 h-8 bg-white justify-center items-center ${hideDate} cursor-pointer roun ${selectedBG}`}
                      onClick={() =>
                        handleSelectDate({
                          fullDateName: `${valueDate} ${monthName[valueMonth - 1]} ${valueYear}`,
                          formatedDate: formatDate(fullDate),
                        })
                      }
                    >
                      <p>{valueDate}</p>
                    </div>
                  )
                  // }
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Calendar
