const https = require('https')
const getRecordsByAgeGroup = async (ageStart, ageEnd, bpDiff) => {
  try {
    let req = await new Promise((resolve, reject) =>
      https.get('https://jsonmock.hackerrank.com/api/medical_records', res => {
        let data = ''
        res.on('data', d => {
          data += d
        })
        res.on('end', () => {
          resolve(data)
        })
        res.on('error', e => {
          reject(e)
        })
      })
    )
    // console.log(JSON.parse(req))
    const { data } = JSON.parse(req)
    const response = data
      .filter(user => {
        const { timestamp, userDob, vitals } = user
        let currentAge =
          new Date(timestamp).getFullYear().toString() - userDob.split('-')[2]
        return (
          currentAge >= ageStart &&
          currentAge <= ageEnd &&
          vitals.bloodPressureDiastole - vitals.bloodPressureSystole > bpDiff
        )
      })
      .map(({ id }) => id)
      .sort((a, b) => a - b)
    return response.length > 0 ? response : [-1]
  } catch (error) {
    return error
  }
}

getRecordsByAgeGroup(28, 30, 60)
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })
