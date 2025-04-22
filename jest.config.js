module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy', // мокаем стили
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // мокаем картинки
  },
  testEnvironment: 'jsdom',
};
