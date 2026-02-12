FROM mcr.microsoft.com/playwright:v1.58.2-noble

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# CI mode keeps Playwright behavior consistent in container runs.
ENV CI=true

CMD ["npx", "playwright", "test"]
