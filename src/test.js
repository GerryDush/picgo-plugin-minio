const helper = require('./helper')
const fs = require('fs');

helper.initMinioClient({
    endPoint: 'oss.tttx.org',
    port: 443,
    useSSL: true,
    accessKey: 'khjZA6yt9sTXQDEpATXc',
    secretKey: 'Ji2qZgDQlkd4tjcCV60WE9XCTCqrYnIkUuslOGyt',
    allowInsecureCert: false,
    bucket: 'markdown'
}).then(res => {
    const path = '/Users/liuyupei/Downloads/a.png';
    const fileStream = fs.readFileSync(path);
    const fileStat = fs.statSync(path);
    console.log(fileStat.size);
    helper.uploadFileToMinio('/aa/aaa.png', fileStream, 'image/png')

});