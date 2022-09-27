import { awscdk } from 'projen';

const project = new awscdk.AwsCdkTypeScriptApp({
    authorName: 'DevOps@Home',
    authorUrl: 'https://devops-at-ho.me',
    cdkVersion: '2.43.1',
    defaultReleaseBranch: 'main',
    eslint: false,
    name: 'devops-at-ho.me-blog',
    projenrcTs: true,
    gitignore: ['.idea', 'build'],
    prettier: true,
    prettierOptions: {
        settings: {
            printWidth: 120,
            tabWidth: 4,
            singleQuote: true,
        },
    },
    githubOptions: {
        pullRequestLint: false,
    },
    autoApproveUpgrades: true,
    autoApproveOptions: {
        allowedUsernames: ['devops-at-home'],
    },
    license: 'MIT',
    // deps: [],                /* Runtime dependencies of this module. */
    // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
    devDeps: ['@sls-next/cdk-construct', '@sls-next/lambda-at-edge'] /* Build dependencies for this module. */,
    // packageName: undefined,  /* The "name" in package.json. */
});

project.jest!.addTestMatch('**/?(*.)@(spec|test).[tj]s?(x)');

project.preCompileTask.prependExec('yarn install', {
    cwd: 'app',
});

project.synth();
