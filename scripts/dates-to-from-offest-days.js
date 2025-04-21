const oneDayMS = 86400000
// const today0000UnixEpoch = new Date(
//   new Date().toISOString().split("T")[0] + "T00:00+00:00"
// ).getTime()

export function getOffsetDaysFromDate(to, from) {
  return (to.getTime() - from.getTime()) / oneDayMS
}

export function getDateFromOffsetDays(offset, from) {
  return new Date(offset * oneDayMS + from.getTime())
}
