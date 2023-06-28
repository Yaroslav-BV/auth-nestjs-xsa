module.exports = {
  "server/**/*.ts": [
    () => "tsc --project ./server/tsconfig.build.json --noEmit",
    "npm run server:lint",
  ],
};
