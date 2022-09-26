import { App, StackProps } from 'aws-cdk-lib';
import { NextjsLambdaStack } from './nextjs-lambda.stack';

export class StackFactory {
    constructor(app: App, stackProps?: StackProps) {
        new NextjsLambdaStack(app, `NextjsLambdaStack`, stackProps);
    }
}
