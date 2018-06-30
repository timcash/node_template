const equal = require('assert').deepEqual
const { http_head } = require('./main')

describe('main.js', function() {
  this.timeout(4 * 1000)
  describe('http_head', () => {
    it('makes a head request', async () => {
      const url = 'https://google.com'
      const r1 = await http_head(url)
      equal(r1['content-type'], 'text/html; charset=ISO-8859-1')
    })
  })
})
