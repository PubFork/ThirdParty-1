
var COS = require('cos-nodejs-sdk-v5');
const fs = require('fs');
 
let SecretId = process.argv[2];
let SecretKey = process.argv[3];
let FileName = process.argv[4] + '.tgz';
let Key = 'src/' + FileName;
let FilePath = '../../ThirdParty-' + FileName;

var cos = new COS({
    SecretId: SecretId,
    SecretKey: SecretKey
});

cos.putObject({
    Bucket: 'tars-thirdpart-1300910346',
    Region: 'ap-guangzhou',    
    Key: Key,      
    StorageClass: 'STANDARD',
    Body: fs.createReadStream(FilePath), 
    onProgress: function(progressData) {
        console.log(JSON.stringify(progressData));
    }
}, function(err, data) {
    console.log(err || data);
});

