import { App } from 'aws-cdk-lib';
import { setupBuild } from '../src/main';

describe('Integration test snapshots', async () => {
    const app = new App();

    const stacks = await setupBuild(app);

    test.each(stacks)(`$stackName`, (stack) => {
        expect(stack.template).toMatchSnapshot();
    });
});
