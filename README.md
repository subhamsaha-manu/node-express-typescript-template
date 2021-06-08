## node-express-typescript-template

Template repository for any node js project with express server and typescript.

### Development setup

* Install and configure [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
* Install `nodeJs` using `nvm` by running `nvm install --lts=dubnium` (min version dubnium or v10.x.x)
* Check if it is default version `nvm ls`
* To make it as default version run `nvm alias default 10.x.x` replace x with exact version
* Install only required dependencies `npm ci`
* Run app using command `npm run serve:{env}`

### How to run locally pointing to non prod environment
* Go to `package.json`
* Under the `scripts` run `serve` script
