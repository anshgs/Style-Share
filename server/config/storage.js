const Cloud = require('@google-cloud/storage')
const path = require('path')

const serviceKey = path.join(__dirname, './serviceKey.json')

const { Storage } = Cloud

const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'uiuc-cs222',
})

module.exports = storage
