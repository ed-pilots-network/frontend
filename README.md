# EDPN

Elite Dangerous Pilots Network Frontend

## Get Started

First, clone this repo:

```bash
git clone https://github.com/ed-pilots-network/frontend.git
```

Then, install dependencies with:

```bash
yarn install
```

## Scripts

### Development mode

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
yarn build
```

### Lint

```bash
yarn lint
```

### Test

```bash
yarn test
```

## Using Docker and Makefile

Enter the values in the `.env` for localhost and `.env.development.sample`, `.env.production.sample` for respective environments. Only change `docker` folder files if you are involved in managing deployment to these stages.

### Development environment - for doing testing

```
make build-development
make start-development
```

Open http://localhost:3002

### Production environment - for users

```
make build-production
make start-production
```

Open http://localhost:3003

## Running Locally

First, run the development server:

```bash
yarn dev
```

#### This project uses:

- NextJS as a framework.
- Jest and Playwright for unit and end-to-end testing respectively.
- Typescript
- Eslint
- Prettier
- Husky
- Docker
