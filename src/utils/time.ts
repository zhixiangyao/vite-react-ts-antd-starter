import dayjs from 'dayjs'

export function formatTime(time: dayjs.ConfigType, format = 'YYYY-MM-DD') {
  return dayjs(time).format(format)
}
