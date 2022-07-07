export const numberFormatter = (value) => {
  if (value > 1000000000000) {
    return `${(value / 1000000000000).toFixed(1).replace(/\.0+$/, "")} T`
  } else if (value > 1000000000) {
    return `${(value / 1000000000).toFixed(1).replace(/\.0+$/, "")}B`
  } else if (value > 1000000) {
    return `${(value / 1000000).toFixed(1).replace(/\.0+$/, "")} M`
  } else if (value > 1000) {
    return `${(value / 1000).toFixed(1).replace(/\.0+$/, "")} K`
  }
  return `${value}` || "0"
}
