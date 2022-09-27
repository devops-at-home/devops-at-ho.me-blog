import { App, Environment } from 'aws-cdk-lib';
import { Builder } from '@sls-next/lambda-at-edge';
import { StackFactory } from './stacks/stack-factory';

export const setupBuild = async (env?: Environment) => {
    const builder = new Builder('app', './build', { args: ['build'], cwd: 'app' });
    await builder.build();
    try {
        const app = new App();
        new StackFactory(app, {
            env,
        });
        app.synth();
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

setupBuild({
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
});
