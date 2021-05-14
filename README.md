## What is this template for?

This template is based on the default CRA app structure and it contains a comprehensive list of tools preconfigured, as per best practices, for linting, testing and formatting of the code
Excluding the defualt `packahe.json` commands, I have added:

- `yarn test`
  - this command contains a `jest` test routine followed by a `ESlint` execution
- `yarn lint`
  - runs ESlint
- `yarn prettify`
  - runs prettier
- `yarn format`
  - runs prettify followed by lint

### Husky (Git hooks)

There is a pre-commid hook that is executed every time you commit, thay automagically performs a `prettify` and `test` command.
