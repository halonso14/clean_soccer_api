// jest.config.js
// Sync object
module.exports = {
  verbose: true,
  transform: { '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest' },
  coverageReporters: ['text', 'html'],
};
