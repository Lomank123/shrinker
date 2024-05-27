# shrinker

URL shortener using NodeJS (express) and MongoDB (mongoose).


## Prerequisites

- NodeJS
- Docker, docker-compose


## Installation

- Clone repository:

```shell
git clone https://github.com/Lomank123/shrinker.git
```

- Copy `.env.sample` to `.env` and change env variables if needed:

```shell
cp .env.sample .env
```

- Install all packages:

```shell
npm install
```

- Build and up the DB container:

```shell
docker compose up -d --build
```


## Run

- Run the app:

```shell
npm run start
```


## Usage

The app provides 2 API endpoints:

- `POST /` - Generate new short url from given `url`
- `GET /:shortHash` - Redirect from short url to the original one
