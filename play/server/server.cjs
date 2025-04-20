const express = require('express')
const multer = require('multer')
const path = require('path')

const app = express()
const cors = require('cors')

// 存储目录
const uploadDir = path.join(__dirname, 'upload')
// 处理上传
const upload = multer({dest: uploadDir})

app.use(cors())

app.post('/upload', upload.single('file'),(req, res) => {
    if (!req.file){
        return res.status(400).send('no file')
    }
    res.send('upload success')
})

// 启动服务器
app.listen(3000, () => {
    console.log('listening 3000...');
})