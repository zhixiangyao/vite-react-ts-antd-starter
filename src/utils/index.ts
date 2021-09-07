const getElementById = (id: string) => document.getElementById(id)

const keyBefore = 'vite-react-ts-demo-'

const objectToString = Object.prototype.toString

const toTypeString = (value: unknown): string => objectToString.call(value)

const setLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(
    `${keyBefore}${key}`,
    toTypeString(value) === 'string' ? value : JSON.stringify(value),
  )
}

const getLocalStorage = (key: string, isParse = false): any => {
  const cache = localStorage.getItem(`${keyBefore}${key}`)

  if (cache === undefined) return cache

  return isParse ? cache && JSON.parse(cache) : cache
}

export { getElementById, setLocalStorage, getLocalStorage }
