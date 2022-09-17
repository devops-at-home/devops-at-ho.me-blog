import { web } from 'projen';

const name = 'devops-at-ho.me-blog';

const commonProps = {
    authorName: 'DevOps@Home',
    authorUrl: 'https://devops-at-ho.me',
    defaultReleaseBranch: 'main',
    name,
    projenrcTs: true,
    gitignore: ['.idea'],
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
};

const nextJsProject = new web.NextJsTypeScriptProject({
    ...commonProps,
    // deps: [],                /* Runtime dependencies of this module. */
    // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
    // devDeps: [],             /* Build dependencies for this module. */
    // packageName: undefined,  /* The "name" in package.json. */
    // tailwind: true,          /* Setup Tailwind CSS as a PostCSS plugin. */
});

nextJsProject.synth();

// const awsCdkApp = new awscdk.AwsCdkTypeScriptApp({
//     ...commonProps,
//     cdkVersion: '2.42.0',
//     repositoryDirectory: 'infrastructure',
//     dire
//     // devDeps: ['esbuild', '@types/aws-lambda', 'aws-lambda', 'aws-sdk', 'aws-cloudformation-custom-resource'],
//     // autoApproveUpgrades: true,
//     // autoApproveOptions: {
//     //   allowedUsernames: ['devops-at-home'],
//     // },
// });

// awsCdkApp.jest!.addTestMatch('**/?(*.)@(spec|test).[tj]s?(x)');

// awsCdkApp.synth();
