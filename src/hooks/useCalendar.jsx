import { useEffect, useState } from "react"

const useCalendar = (selectedMonth) => {
  // const today = new Date()
  // const todayFormatted = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  const daysInWeek = [0, 1, 2, 3, 4, 5, 6]
  const [selectedDate, setSelectedDate] = useState(selectedMonth)

  // useEffect(() => {
  //   selectedMonth ? setSelectedDate(selectedMonth) : setSelectedDate(today)
  // }, [])

  const selectedMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0)
  const prevMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0)
  const daysInMonth = selectedMonthLastDate.getDate()
  const firstDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay()
  const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1
  let prevMonthStartingPoint = prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1
  let currentMonthCounter = 1
  let nextMonthCounter = 1
  const rows = 6
  const cols = 7
  const calendarRows = {}

  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      if (!calendarRows[i]) {
        calendarRows[i] = []
      }

      if (i === 1) {
        if (j < startingPoint) {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: "in-prev-month",
              date: `${selectedDate.getMonth() === 0 ? selectedDate.getFullYear() - 1 : selectedDate.getFullYear()}-${selectedDate.getMonth() === 0 ? 12 : selectedDate.getMonth()}-${prevMonthStartingPoint}`,
              valueYear: selectedDate.getMonth() === 0 ? selectedDate.getFullYear() - 1 : selectedDate.getFullYear(),
              valueMonth: selectedDate.getMonth() === 0 ? 12 : selectedDate.getMonth(),
              valueDate: prevMonthStartingPoint,
            },
          ]
          prevMonthStartingPoint++
        } else {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: "",
              date: `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${currentMonthCounter}`,
              valueYear: selectedDate.getFullYear(),
              valueMonth: selectedDate.getMonth() + 1,
              valueDate: currentMonthCounter,
            },
          ]
          currentMonthCounter++
        }
      } else if (i > 1 && currentMonthCounter < daysInMonth + 1) {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: "",
            date: `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${currentMonthCounter}`,
            valueYear: selectedDate.getFullYear(),
            valueMonth: selectedDate.getMonth() + 1,
            valueDate: currentMonthCounter,
          },
        ]
        currentMonthCounter++
      } else {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: "in-next-month",
            date: `${selectedDate.getMonth() + 2 === 13 ? selectedDate.getFullYear() + 1 : selectedDate.getFullYear()}-${selectedDate.getMonth() + 2 === 13 ? 1 : selectedDate.getMonth() + 2}-${nextMonthCounter}`,
            valueYear: selectedDate.getMonth() + 2 === 13 ? selectedDate.getFullYear() + 1 : selectedDate.getFullYear(),
            valueMonth: selectedDate.getMonth() + 2 === 13 ? 1 : selectedDate.getMonth() + 2,
            valueDate: nextMonthCounter,
          },
        ]
        nextMonthCounter++
      }
    }
  }

  const getPrevMonth = () => {
    setSelectedDate((prevValue) => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1))
  }

  const getNextMonth = () => {
    setSelectedDate((prevValue) => new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1))
  }

  const goToMonth = (value) => {
    setSelectedDate(value)
  }

  return {
    // todayFormatted,
    calendarRows,
    selectedDate,
    getPrevMonth,
    getNextMonth,
    goToMonth,
  }
}

export default useCalendar
