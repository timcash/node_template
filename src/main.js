const rp = require('request-promise-native')

async function http_head(url) {
  try {
    const result = await rp.head(url)
    return result
  } catch (error) {
    return error.toString()
  }
}

module.exports = {
  http_head,
}
