import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NextJSLambdaEdge } from '@sls-next/cdk-construct';

export class NextjsLambdaStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps = {}) {
        super(scope, id, props);

        new NextJSLambdaEdge(this, 'NextJsApp', {
            serverlessBuildOutDir: './build',
        });
    }
}
