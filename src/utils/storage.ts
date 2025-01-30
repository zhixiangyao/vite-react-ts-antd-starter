const keyBefore = 'vite-react-ts-antd-starter-'

function setLocalStorage(key: string, value: any): void {
  localStorage.setItem(
    `${keyBefore}${key}`,
    typeof value === 'string' ? value : JSON.stringify(value),
  )
}

function getLocalStorage(key: string, isParse = false): any {
  const cache = localStorage.getItem(`${keyBefore}${key}`)

  if (cache === undefined)
    return cache

  return isParse ? cache && JSON.parse(cache) : cache
}

export { getLocalStorage, setLocalStorage }
