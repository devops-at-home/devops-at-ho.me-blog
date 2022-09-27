import { App, Environment } from 'aws-cdk-lib';
import { Builder } from '@sls-next/lambda-at-edge';
import { StackFactory } from './stacks/stack-factory';

export const setupBuild = async (app: App, env?: Environment) => {
    const builder = new Builder('app', './build', { args: ['build'], cwd: 'app' });
    await builder.build();
    try {
        new StackFactory(app, {
            env,
        });
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
    const { stacks } = app.synth();
    return stacks;
};

const app = new App();

setupBuild(app, {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
});
