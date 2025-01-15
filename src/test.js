const helper = require('./helper')
const fs = require('fs');

helper.initMinioClient({
    endPoint: '<xxx.xxx.xxx>',
    port: 443,
    useSSL: true,
    accessKey: '<xxx>',
    secretKey: '<xxx>',
    allowInsecureCert: false,
    bucket:'<xxx>'
}).then(res=>{
    const file = fs.readFileSync('/Users/xxx/Pictures/xxx/xxx.jpg'); 
    helper.uploadFileToMinio('xxx/xxx.jpg', file,'image/jpeg')
});