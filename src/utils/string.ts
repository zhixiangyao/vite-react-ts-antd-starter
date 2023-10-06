/**
 * ```ts
 *   // case 1
 *   const s = stringCapitalization('ANDROID')
 *   console.log(s) // Android
 *
 *   // case 2
 *   const s = stringCapitalization('IOS', [1, Infinity])
 *   console.log(s) // iOS
 *
 *   // case 3
 *   const s = stringCapitalization('AAAAAAA', [0, 3])
 *   console.log(s) // AAAaaaa
 * ```
 */
export const stringCapitalization = (str: string, scope: [number, number] = [0, 0]) => {
  if (!str) return ''

  const list = [...str]

  return list.reduce((acc, cur, i) => {
    if (i >= scope[0] && i <= scope[1]) {
      return acc + cur.toUpperCase()
    }

    return acc + cur.toLowerCase()
  }, '')
}

/**
 *
 * ```ts
 *   // case 1
 *   const s = stringPluralize(1, 'Phone')
 *   console.log(s) // Phone
 *
 *   // case 2
 *   const s = stringPluralize(2, 'Phone')
 *   console.log(s) // Phones
 * ```
 */
export const stringPluralize = (num: number, word: string) => {
  if (num === 1) {
    return word
  } else {
    return word + 's'
  }
}
