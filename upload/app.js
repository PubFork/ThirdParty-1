
var COS = require('cos-nodejs-sdk-v5');
const fs = require('fs');
 
let SecretId = process.argv[2];
let SecretKey = process.argv[3];
let Key = 'src/' + process.argv[4];
let File = '../../' + process.argv[4] + '.tgz';

var cos = new COS({
    SecretId: SecretId,
    SecretKey: SecretKey
});

cos.putObject({
    Bucket: 'ars-thirdpart-1300910346',
    Region: 'ap-guangzhou',    
    Key: Key,      
    StorageClass: 'STANDARD',
    Body: fs.createReadStream(File), 
    onProgress: function(progressData) {
        console.log(JSON.stringify(progressData));
    }
}, function(err, data) {
    console.log(err || data);
});

