<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Contents

- [Contents](#contents)
- [Description](#description)
- [Requirement](#requirement)
- [Prerequisite](#prerequisite)
  - [Install all the project dependencies](#install-all-the-project-dependencies)
  - [Sync database migration](#sync-database-migration)
  - [Seeding database](#seeding-database)
- [Running the app](#running-the-app)
- [Special commands](#special-commands)
- [Test (Coming soon)](#test-coming-soon)
- [Support](#support)
- [Stay in touch](#stay-in-touch)
  - [NestJS authors](#nestjs-authors)
  - [TheCodeOrigin authors](#thecodeorigin-authors)
- [License](#license)

## Description

This is a project template built on [Nest](https://github.com/nestjs/nest) framework. Built by members of TheCodeOrigin team.

## Requirement

- [Git](https://git-scm.com/downloads)
- [MySQL](https://www.mysql.com/) or [Postgresql](https://www.postgresql.org/)
- [NodeJS](https://nodejs.org/en/download/) and [npm](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/getting-started)
- [Docker](https://www.docker.com/)

## Prerequisite

### Install all the project dependencies

```bash
# Install package using yarn
$ yarn install

# Install Husky git hook to run precommit
$ yarn prepare-husky
```

### Sync database migration

```bash
# Create a new migration
$ yarn migrate:create

# Generate new migrations based on entity change
$ yarn migrate:generate

# Run all migrations
$ yarn migrate:run

# Revert one specific migration
$ yarn migrate:revert

```

### Seeding database

```bash
# Drop all tables in database
$ yarn schema:drop

# Run all seeding files
$ yarn seed:run

# Full reset, resync and then seed database again
$ yarn schema:reset

```

## Running the app

```bash
# Build the project for production
$ yarn build

# Development (Without watch)
$ yarn start

# Developement (With watch)
$ yarn start:dev

# Developement (With watch and debug)
$ yarn start:debug

# Production (After build)
$ yarn start:prod
```

## Special commands

```bash
# Select between multiple commands
$ yarn command

# Generate API module inside your project
$ yarn command generate-module

# Generate a user (Require database connection)
$ yarn command generate-user
```

## Test (Coming soon)

```bash
# unit tests
$ yarn test
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

### NestJS authors

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

### TheCodeOrigin authors

- Author - [Nguyen Quang Tu](https://www.linkedin.com/in/quangtudng/)
- Partner - [Nguyen Huu Nguyen Y](https://www.linkedin.com/in/nguyen-y-nguyen-huu-472404185/)

## License

Nest is [MIT licensed](LICENSE).
