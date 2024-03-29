module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  bracketSpacing: true,
  overrides: [
    {
      files: ["**/*.html", "**/*.twig"],
      options: {
        tabWidth: 4,
        useTabs: true,
      },
    },
  ],
};
