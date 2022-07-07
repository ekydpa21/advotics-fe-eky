function padTo2Digits(num) {
  return num.toString().padStart(2, "0")
}

export function formatDate(date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
}
