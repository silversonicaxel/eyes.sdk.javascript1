'use strict';

module.exports = {
  concurrency: 10,
  renderConcurrencyFactor: 10,
  storybookPort: 9000,
  storybookHost: 'localhost',
  storybookConfigDir: '.storybook',
  storybookUrl: undefined,
  storybookStaticDir: undefined,
  showStorybookOutput: false,
  waitBeforeScreenshot: 50,
  waitBeforeScreenshots: 50, // backward compatibility
  tapFilePath: undefined,
  readStoriesTimeout: 60000,
};
