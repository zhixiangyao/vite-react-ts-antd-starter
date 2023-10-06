import { useSize } from 'ahooks'

export const useIsDesktop = () => {
  const size = useSize(document.querySelector('#root'))

  return (size?.width ?? 0) >= 1280
}
