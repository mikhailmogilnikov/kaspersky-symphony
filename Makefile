install:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

pre-commit:
	npx lint-staged

pre-push:
	make build