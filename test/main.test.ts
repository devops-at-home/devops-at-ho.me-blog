import { App } from 'aws-cdk-lib';
import { setupBuild } from '../src/main';

test('Integration test snapshots', async () => {
    const app = new App();

    const stacks = await setupBuild(app);

    stacks.forEach((stack) => expect(stack.template).toMatchSnapshot());
});
