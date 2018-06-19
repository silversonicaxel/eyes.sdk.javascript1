# Eyes.Cypress
Applitoos Eyes SDK for [Cypress](https://www.cypress.io/).

## Installation
### Install npm package
Install `eyes.cypress` as a local dev dependency in your tested project:
```
npm install --save-dev @applitools/eyes.cypress
```

### Install eyes.cypress plugin
Add this to your `pluginsFile` (normally, this is `cypress/plugins/index.js`):
```
require('@applitools/eyes.cypress')
```

### Install custom commands
Add this to your `supportFile` (normally, this is `cypress/support/index.js`):
```
import '@applitools/eyes.cypress/commands
```

### API key
Run your cypress tests with the environment variable `APPLITOOLS_API_KEY` set to the API key you have from Applitools Eyes.

## Usage

After completing all of the above, you will be able to use commands from `eyes.cypress` in your cypress tests to take screenshots and use Applitools Eyes to manage them:

### Example
```
describe('Hello world', () => {
  it('', () => {
    cy.visit('https://applitools.com/helloworld');
    cy.eyesOpen({
      appName: 'Hello World!',
      testName: 'My first JavaScript test!',
      viewportSize: { width: 800, height: 600 },
    });
    cy.eyesCheckWindow('Main Page');
    cy.get('button').click();
    cy.eyesCheckWindow('Click!');
    cy.eyesClose();
  });
});
```
Note: don't forget to set the `APPLITOOLS_API_KEY` environment variable.

### Commands
Here's an overview of the available commands:

##### Open
This will start a session with the Applitools server. It should be called for each test, so that all screenshots for each test are grouped together.
```
cy.eyesOpen(appName, testName, { width, height })
```

##### Check window
This will take a screenshot of your application at the moment of calling, and upload it to Applitools Eyes for matcing against the baseline.
```
cy.eyesCheckWindow()
```

##### Close
This will close the session that was started with the `eyesOpen` call. It is important to call this at the end (or `after()`) each test, symmetrically to `eyesOpen`.
```
cy.eyesClose()
```
Note about timeouts: the `cy.eyesClose()` command should be called at the end of the test, and depending on various factors such as the website's size and number of screenshots (i.e. the number of calls to `cy.eyesCheckWindow()`), the elapsed time it takes for this command to complete may vary.
The default timeout is 2 minutes, but in the rare cases that's not enough, it's possible to configure this by passing a value:
```
cy.eyesClose({ timeout: 180000 }) // timeout of 3 minutes
```

## Advanced configuration
### Plugin port
The `eyes.cypress` package uses a local server for communication between the browser and the node plugin. The port used is `7373` by default, but that may be altered.

##### Option 1: Default port
The basic usage described above looks like this (this is done in the `pluginsFile`):
```
require('@applitools/eyes.cypress')
```

##### Option 2: Custom port
In some cases, the `7373` port might be unavailable, so in order to use a different port, you may do the following:
```
require('@applitools/eyes.cypress')({ port: 8484 })
```
When doing so, it's also necessary to pass the port as a `Cypress` config variable to the browser, so in the `pluginsFile` add a property named `eyesPort` to your configuration:
```
module.exports = () => {
  ...
  return { eyesPort: 8484, ... };
}
```

##### Option 3: Available port
If you want to be absolutely sure that `eyes.cypress` will use an available port, it's also possible to pass `0` as the port:
```
const { getEyesPort } = require('@applitools/eyes.cypress')({ port: 0 });
const eyesPort = await getEyesPort();
```
Now it is guaranteed that `eyesPort` is available. Don't forget to return it from `module.exports`, like in the case for custom port above.