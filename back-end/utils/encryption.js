const crypto = require('crypto')

let encryptData = {}

encryptData.hashData = (data) => {
  const hashedData = crypto.createHash('sha256').update(data).digest('hex')
  return hashedData
}

encryptData.compareHash = (data, hash) => {
  return encryptData.hashData(data) === hash
}

module.exports = encryptData
