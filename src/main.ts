import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NextJSLambdaEdge } from '@sls-next/cdk-construct';
import { Builder } from '@sls-next/lambda-at-edge';

export class MyStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps = {}) {
        super(scope, id, props);

        new NextJSLambdaEdge(this, 'NextJsApp', {
            serverlessBuildOutDir: './build',
        });
    }
}

const env = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
};

const builder = new Builder('app', './build', { args: ['build'], cwd: 'app' });

builder
    .build()
    .then(() => {
        const app = new App();
        new MyStack(app, `MyStack`, { env });
    })
    .catch((e) => {
        console.log(e);
        process.exit(1);
    });
