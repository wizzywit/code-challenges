const parkingD = (cars, k) => {
  cars.sort((a, b) => a - b)
  let arr = []
  let len = cars.length
  let start = 0
  while (k + start < len + 1) {
    arr.push(cars.slice(start, k + start))
    start += 1
  }
  console.log(arr)
  console.log(Math.min(...arr.map(elem => elem[elem.length - 1] + 1 - elem[0])))
}

parkingD([6, 2, 12, 7], 3)
