import { web } from 'projen';
const project = new web.NextJsTypeScriptProject({
  authorName: 'DevOps@Home',
  authorUrl: 'https://devops-at-ho.me',
  defaultReleaseBranch: 'main',
  name: 'devops-at-ho.me-blog',
  projenrcTs: true,
  gitignore: ['.idea'],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // tailwind: true,          /* Setup Tailwind CSS as a PostCSS plugin. */
});
project.synth();
