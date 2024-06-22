
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'node',
  testRegex: '(/tests/.*|(\\.|/)(tests))\\.(ts|tsx)?$',
  modulePathIgnorePatterns: ['./internal/', './node_modules/'],
};
