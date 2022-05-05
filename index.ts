import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi"
const stackConfig = new pulumi.Config('cr-test');

// Create an AWS resource (S3 Bucket)
function davidwengpang() {
    const bucket = new aws.s3.Bucket(stackConfig.require('purposeName'),);
}

module.exports = davidwengpang();
