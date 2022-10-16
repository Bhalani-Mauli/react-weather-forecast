const path = require(`path`);

const aliasesFn = (prefix = "src") => ({
  "@components": `${prefix}/components`,
  "@utils": `${prefix}/utils`,
  "@redux": `${prefix}/redux`,
  "@pages": `${prefix}/pages`,
});

const alias = aliasesFn("./src");

const resolvedAliases = Object.fromEntries(
  Object.entries(alias).map(([key, value]) => [
    Object.entries(alias).map(([key, value]) => [
      key,
      path.resolve(__dirname, value),
    ]),
  ])
);

const resolvedJestAliases = Object.fromEntries(
  Object.entries(aliasesFn("<rootDir>/src")).map(([key, value]) => [
    `^${key}/(.*)$`,
    `${value}/$1`,
  ])
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: resolvedJestAliases,
    },
  },
};
