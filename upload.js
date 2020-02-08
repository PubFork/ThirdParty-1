
var COS = require('cos-nodejs-sdk-v5');
// const yargs = require('yargs');
 
// let argv = yargs.argv;

process.argv[2];
var cos = new COS({
    SecretId: process.argv[1],
    SecretKey: process.argv[2]
});

cos.putObject({
    Bucket: 'ars-thirdpart-1300910346',
    Region: 'ap-guangzhou',    
    Key: process.argv[3],      
    StorageClass: 'STANDARD',
    Body: fs.createReadStream(process.argv[3] + ''.tgz), 
    onProgress: function(progressData) {
        console.log(JSON.stringify(progressData));
    }
}, function(err, data) {
    console.log(err || data);
});

