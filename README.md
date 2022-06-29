<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
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
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# 사전 작업

## nestjs 설치

```bash
npm i -g @nestjs/cli
```

## 적당한 폴더 이동 > 신규 프로젝트(hi-nest) 생성

```bash
nest new
```

## 해당 프로젝트 이동 후, VS code 실행

```bash
code .
```

## github 리포지토리(프로젝트명과 동일) 생성 및 연결

## 스크립트 실행

```bash
npm run start:dev
```

## 브라우저에서 정상작동 확인

http://localhost:3000

## 메모 내용

## 2.2 Movies Service part One

- 2.2 Movies Service part One 에서 만든 약식 DB(Move[])는 메모리에 존재하므로 소스 파일 수정시 서버 재실행되므로 초기화됨

## 2.5 DTOs and Vaildation part Two

- PartialType() 사용 관련 패키지 설치

- mapped-types는 타입을 변환시키고 사용할 수 있게 함

```bash
npm i @nestjs/mapped-types
```

## 2.6 Modules and Dependency Injection

- app.modules.ts에는 AppController와 AppService만 있어야 함

- MovieService와 MovieController를 movies.module.ts로 이전 => NestJS에서 앱은 다수의 모듈로 구성

## 3.0 Introduction to Testing in Nest

- package.json 내 5 가지의 test 스크립트 존재

- jest: JS를 아주 쉽게 테스팅하는 패키지

- ~.spec.ts: 테스트를 포함한 파일

- NestJS에서는 jest가 ~.spec.ts를 찾을 수 있도록 설정

- 아래 스크립트 실행시 모든 spec 파일을 확인해서 테스트 진행 정도 표시?

```bash
npm run test:cov
```

- 유닛 테스트 실시간 결과 확인

```bash
npm run test:watch
```

- 유닛 테스팅: 모든 function을 따로 테스트하는 것, 특정 functiona만 별도로

- end-to-end(e2e) 테스팅: 모든 시스템을 테스트하는 것, e2e 테스팅은 이 페이지로 가면 특정 페이지가 나와야 하는 경우 사용, 사용자 관점(사용자 스토리~),

- end-to-end(e2e) 테스팅: 'test'폴더 필요

## 4.0 Testing movies

- 관련 스크립트

```bash
npm run test:e2e
```
