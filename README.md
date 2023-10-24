# Installation

```bash
yarn install
```

# Start experiments

run server to host the built assets:
```bash
make run-server
```

run `vite` to hot-reload the changes:

```bash
make watch-build
```

# Troubleshooting

## vis-network

- https://github.com/visjs/vis-network/issues/588

## Prettier
- prettier version: 2.8.8
  - there is some issue with 3.x, don't use it
- prettier-vscode version: `esbenp.prettier-vscode` v10.1.0

## jQuery intellisense with vscode
- https://www.youtube.com/watch?v=GjqogBulgtE&ab_channel=AhmedHussainy
  - `npm install tsd -g`
  - `npm i typings -g`
  - `typings install dt~jquery --global`
  - copy&paste `/// <reference path="./../typings/globals/jquery/index.d.ts" />` to your js file