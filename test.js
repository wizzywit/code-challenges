const ARRAY = []

const testFuntion = stringValue => {
  if (stringValue.length === 0) {
    return
  }
  let char = ''
  let count = 0
  let array = [...stringValue]
  let position = null
  array.forEach((e, ind) => {
    if (ind === 0) {
      char = e
    } else {
      if (e === array[ind - 1] && ind - 1 !== -1 && ind !== array.length - 1) {
        return
      } else if (position === null) {
        count =
          ind === array.length - 1 && e !== array[ind - 1]
            ? (count = ind)
            : ind === array.length - 1
            ? (count = ind + 1)
            : (count = ind)
        position = ind
      }
    }
  })
  if (position) {
    ARRAY.push([char, count])
    testFuntion(stringValue.substring(position))
  }
}
const maxElementIndex = (max, arr) => arr.indexOf(max)
const consequtiveArray = string => {
  if (string === '') return ['', 0]   
  testFuntion(string)
  const result = ARRAY.map(e => {
    return e[1]
  })
  let max = result.reduce((a, b) => Math.max(a, b))
  return ARRAY[maxElementIndex(max, result)]
}
console.log(consequtiveArray("cbdeuuu900")); 
