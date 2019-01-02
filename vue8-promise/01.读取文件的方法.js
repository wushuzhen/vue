const fs = require('fs')
cosnt path = require('path')


function getFileByPath(fpath, callback) {
  fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    if (err) return callback(err)
    callback(null, dataStr)
  })
}

getFileByPath(path.join(__dirname, './files/11.tet'), (err, dataStr) => {
  if (err) return console.log(err.message)
  console.log(dataStr)
})