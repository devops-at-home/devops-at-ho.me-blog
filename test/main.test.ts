import { App } from 'aws-cdk-lib';
import { Builder } from '@sls-next/lambda-at-edge';
import { StackFactory } from '../src/stacks/stack-factory';

beforeAll(async () => {
    const builder = new Builder('app', './build', { args: ['build'], cwd: 'app' });
    await builder.build();
});

// test('Integration test snapshots', async () => {
//     // This times out because it takes longer than 5000ms
//     // const app = new App();
//     // const stacks = await setupBuild(app);
//     // stacks.forEach((stack) => expect(stack.template).toMatchSnapshot());

//     expect(true).toBeTruthy;
// });

describe('Integration test snapshots', () => {
    const app = new App();

    new StackFactory(app);

    const { stacks } = app.synth();

    test.each(stacks)(`$stackName`, (stack) => {
        expect(stack.template).toMatchSnapshot();
    });
});
