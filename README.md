# Elite Dangerous Pilots Network - Frontend

The EDPN `frontend` project handles the web application for the Elite Dangerous Pilots Network Website. It consumes the [EDPN Backend API](https://github.com/ed-pilots-network/backend) to support its features.

![Dev Build Status](https://github.com/ed-pilots-network/frontend/actions/workflows/build-deploy.yaml/badge.svg?branch=development)

## 📦 Get Started

First, clone this repo:

```bash
git clone https://github.com/ed-pilots-network/frontend.git
```

Then, install dependencies with:

```bash
yarn install
```

## 📝 Scripts

### Run Frontend Web App & JSON Mock API Server

```bash
yarn dev-api
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the web app while API runs on [http://localhost:3001](http://localhost:3001).

### Run Frontend Web App

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run JSON Mock API Server

```bash
yarn api
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the API endpoint. Read more on [JSON Server](https://github.com/typicode/json-server)

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

### Take Screenshots
If you are making changes that impact the UI, ensure to test the change on different view ports. Run the following to auto capture screenshots when tests run. Note that this only runs when you run this command locally.

#### Take screenshots of home page
```bash
yarn capture-screenshots
```

#### Take screenshots of a specific page
```bash
PAGE_PATH=/commodities yarn capture-screenshots
```

## 🐳 Using Docker and Makefile

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

### 🧰 This project uses:

- NextJS as a framework.
- Jest and Playwright for unit and end-to-end testing respectively.
- Typescript
- Eslint
- Prettier
- Husky
- Docker

### 🌐 Useful Tools
- [ColorKit](https://colorkit.co/color-palette-generator/272f33-4e5d66-9BB9CB-cddce5-e6eef2/) - Color Palette Generator