const aws = require('aws-sdk');
const config = require('../config/default.json');

(async function() {
  try {
    aws.config.setPromiseDependency();
    aws.config.update({
      accessKeyId: config.awsAccessKeyId,
      secretAccessKey: config.awsSecret,
      region: 'eu-london'
    });

    const s3 = new aws.S3();
    const response = await s3
      .listObjectsV2({
        Bucket: 'mymovies-films'
      })
      .promise();

    console.log(response);
  } catch (e) {
    console.log('AWS Error: ', e);
  }

  debugger;
})();
