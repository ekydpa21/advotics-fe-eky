import React from "react"
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { numberFormatter } from "../utils/numberFormatter"

const data = [
  {
    label: "Jan 12",
    Gross: 800,
    Nett: 590,
    APV: 17000,
    UPT: 7.98,
  },
  {
    label: "Tue",
    Gross: 967,
    Nett: 868,
    APV: 17000,
    UPT: 7.98,
  },
  {
    label: "Wed",
    Gross: 1498,
    Nett: 1397,
    APV: 17000,
    UPT: 7.98,
  },
  {
    label: "Thu",
    Gross: 1500,
    Nett: 1480,
    APV: 17000,
    UPT: 7.98,
  },
  {
    label: "Fri",
    Gross: 1608,
    Nett: 1520,
    APV: 17000,
    UPT: 7.98,
  },
  {
    label: "Sat",
    Gross: 1680,
    Nett: 1400,
    APV: 17000,
    UPT: 7.98,
  },
  {
    label: "Sun",
    Gross: 1680,
    Nett: 1400,
    APV: 17000,
    UPT: 7.98,
  },
]

const legends = [
  {
    title: "Nett",
    color: "#37B04C",
  },
  {
    title: "Gross",
    color: "#289E45",
  },
  {
    title: "Average Purchase Value",
    color: "#7AE28C",
  },
  {
    title: "Unit per Transaction",
    color: "#707070",
  },
]

const Chart = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    const filtered = data.filter((item) => item.label === label)[0]
    const dataTooltip = []

    filtered &&
      Object.entries(filtered)?.forEach(([key, value]) => {
        if (key !== "label") {
          legends.map((legend) => {
            const splited = legend.title.split(" ")

            if (legend.title.split(" ").length > 1) {
              let temp = ""

              splited.map((letter) => {
                temp += letter[0].toUpperCase()
              })

              temp === key && dataTooltip.push({ name: key, value, color: legend.color })
            }

            legend.title === key && dataTooltip.push({ name: key, value, color: legend.color })
          })
        }
      })

    return (
      <div className="flex flex-col bg-white py-2 px-4 tooltip [&>*:not(last-child)]:mb-2">
        <h5 className="font-bold text-xs text-[#43425D]">Date/Month/Year</h5>
        {dataTooltip?.map((item, index) => {
          return (
            <div key={index} className="flex items-center text-xs [&>*:not(last-child)]:mr-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
              <p>{item.name}</p>

              <p style={{ color: item.color }}>{item.value}</p>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 50,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid vertical={false} stroke="#f5f5f5" />
          <XAxis dataKey="label" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(tick) => {
              return numberFormatter(tick)
            }}
          />
          <Tooltip content={CustomTooltip} />
          {/* <Legend /> */}
          <Bar dataKey="Gross" barSize={20} stackId="a" fill="#289E45" />
          <Bar dataKey="Nett" barSize={20} stackId="a" fill="#37B04C" />
          <Line type="monotone" dataKey="Nett" stroke="#FFE854" dot={{ stroke: "#FFE854" }} strokeWidth={3} />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="flex">
        {legends.map((legend, index) => (
          <div key={index} className="flex text-[#B1B2B7] items-center mr-8 text-sm">
            <div className={`h-2 w-5 rounded-xl mr-2`} style={{ backgroundColor: legend.color }} />
            <p>{legend.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Chart
