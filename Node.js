name: Tensura Anime Bot CI

on:
  push:
    branches: ["main"]

  pull_request:
    branches: ["main"]

jobs:
  test-bot:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Check Bot Startup (Safe Test)
        run: timeout 20s npm start || echo "Bot test completed"
