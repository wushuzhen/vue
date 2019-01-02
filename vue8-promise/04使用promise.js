const fs = require('fs')

function getFileByPath(fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, reject) {
      if (err) return reject(err)
      resolve(dataStr)
    })
  })
}

getFileByPath('./files/11.txt').then(function (data) {
  console.log(data)
  teturn getFileByPath('./files/2.txt')
})