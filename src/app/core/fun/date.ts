export function getYMD (date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() 
  let time: string
  if (month < 10) {
    time = `${year}-0${month+1}`
  } else {
    time = `${year}-${month+1}`
  }
  const day = date.getDate()
  if (day < 10) {
    time = `${time}-0${day}`
  } else {
    time = `${time}-${day}`
  }
  return time
}