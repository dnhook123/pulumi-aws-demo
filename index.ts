import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi"
const stackConfig = new pulumi.Config('pulumi-aws-demo');

// Create an AWS resource (S3 Bucket)
function test() {
    const bucket = new aws.s3.Bucket(stackConfig.require('purposeName'));
}

module.exports = test();
