# @studyflow/config

This package centralizes reusable configuration for the StudyFlow monorepo. It does not install TypeScript, ESLint, Prettier, parsers, plugins, or frameworks. Applications and packages can opt into these presets after they choose their own toolchain dependencies.

## TypeScript Configuration

The `tsconfig` folder contains shared TypeScript compiler presets.

- `tsconfig/base.json` defines strict, framework-neutral compiler defaults for shared packages and future applications.
- `tsconfig/web.json` extends the base preset with browser-oriented libraries and JSX preservation for a future web framework.
- `tsconfig/server.json` extends the base preset with Node-oriented output settings for a future backend runtime.
- `tsconfig/package.json` exposes the presets as the `@studyflow/tsconfig` workspace package so projects can extend them with package-style paths.

Example future usage:

```json
{
  "extends": "@studyflow/tsconfig/base.json"
}