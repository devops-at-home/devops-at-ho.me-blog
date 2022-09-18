import { awscdk } from "projen";
const project = new awscdk.AwsCdkTypeScriptApp({
  authorName: "DevOps@Home",
  authorUrl: "https://devops-at-ho.me",
  cdkVersion: "2.42.0",
  defaultReleaseBranch: "main",
  eslint: false,
  name: "devops-at-ho.me-blog",
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();