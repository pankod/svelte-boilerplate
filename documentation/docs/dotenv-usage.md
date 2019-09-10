---
id: dotenv-usage
title: Enviroment Variables(.env)
sidebar_label: Enviroment Variables
---



This boilerplate uses dotenv plugin to expose environment variables to the Svelte runtime configuration.

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

After defining keys in the .env file, you can reach the same keys from file.
```
const BaseUrl = `${process.env.API_URL}/api`;
```

Add environment-specific variables on new lines in the form of NAME=VALUE in .env file.
```
API_URL=test1234
```

<br>
> **WARNING**
>- The .env file only needs to be used in the development process.
>- [Environment variable](https://en.wikipedia.org/wiki/Environment_variable) should be used for production use.
>- If you use unit testing, you should add same variable into `.env.test` file.

