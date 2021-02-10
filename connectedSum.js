const connectedSum = (graphNodes, graphFrom, graphTo) => {
  //generating array of numbers 1-N
  let masterArray = Array.from({ length: graphNodes }, (_, i) => i + 1)

  let graph = []
  graphFrom.forEach((el, i) => {
    graph.push([el, graphTo[i]])
  })
  let tree = []
  let tempArr = []
  const checkAvail = (arr, arrEl) => {
    let avail = false
    let index = -1
    arr.forEach((elem, ind) => {
      if (elem.some(e => arrEl.indexOf(e) > -1)) {
        avail = true
        index = ind
      }
    })

    return [avail, index]
  }
  graph.forEach((element, i) => {
    const [avail, index] = checkAvail(tree, element)
    if (tempArr.length === 0 && !avail) {
      element.forEach(e => tempArr.push(e))
    } else if (avail) {
      element.forEach(e => {
        if (!tree[index].includes(e)) {
          tree[index] = [...tree[index], e]
        }
      })
    } else if (tempArr.some(e => element.indexOf(e) > -1) && !avail) {
      element.forEach(e => {
        if (!tempArr.includes(e)) tempArr.push(e)
      })
    } else {
      tree.push(tempArr)
      tempArr = []
      element.forEach(e => tempArr.push(e))
    }

    if (i === graph.length - 1 && tempArr.length > 0) {
      tree.push(tempArr)
      tempArr = []
    }
  })
  console.log(tree)
  let singleArray = masterArray.filter(e => {
    return !tree.flat().includes(e)
  })
  let groupNodesSum = tree
    .map(e => {
      return Math.ceil(Math.sqrt(e.length))
    })
    .reduce((a, b) => a + b, 0)
  console.log(groupNodesSum + singleArray.length)
}

connectedSum(10, [1, 1, 2, 3, 7], [2, 3, 4, 5, 8])
// connectedSum(8, [8,5], [1,8])
// connectedSum(16, [6, 11, 9, 5, 11, 9, 15, 9], [13, 15, 12, 14, 15, 16, 1, 16])
