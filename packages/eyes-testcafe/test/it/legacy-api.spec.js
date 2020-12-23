const {VisualGridRunner} = require('@applitools/eyes-sdk-core')
const {EyesFactory} = require('../../src/TestCafeSDK')
const eyes = new EyesFactory(new VisualGridRunner())
const assert = require('assert')

fixture`legacy vg api`.after(async () => {
  if (eyes.getIsOpen()) await eyes.close(false)
})
test('eyes.open with init params', async driver => {
  assert.doesNotThrow(async () => {
    await eyes.open({t: driver, appName: 'app-name', testName: 'test-name'})
  })
})
test('eyes.open with config params', async driver => {
  const init = {
    t: driver,
    appName: 'app-name',
    testName: 'test-name',
  }
  const browser = [{width: 1024, height: 768, name: 'ie11'}]
  assert.doesNotThrow(async () => {
    await eyes.open({
      ...init,
      browser,
    })
  })
  const config = eyes.getConfiguration()
  assert.deepStrictEqual(config.getBrowsersInfo(), browser)
})
test.skip('eyes.checkWindow tag', async t => {
  await t.navigateTo('https://applitools.github.io/demo/TestPages/FramesTestPage/')
  await eyes.open({t, appName: 'eyes-testcafe', testName: 'legacy api test: checkWindow tag'})
  await eyes.checkWindow('tag')
  await eyes.checkWindow({tag: 'tag'})
  await eyes.close(false)
  // assert tags in jobs
})
test.skip('eyes.checkWindow fully', async t => {
  await t.navigateTo('https://applitools.github.io/demo/TestPages/FramesTestPage/')
  await eyes.open({t, appName: 'eyes-testcafe', testName: 'legacy api test: checkWindow fully'})
  await eyes.checkWindow({target: 'window', fully: true})
  await eyes.close(true)
})
test.skip('eyes.checkWindow selector', async t => {
  await t.navigateTo('https://applitools.github.io/demo/TestPages/FramesTestPage/')
  await eyes.open({t, appName: 'eyes-testcafe', testName: 'legacy api test: checkWindow selector'})
  await eyes.checkWindow({target: 'region', selector: '#overflowing-div'})
  await eyes.close(true)
})
test.skip('eyes.checkWindow region', async t => {
  await t.navigateTo('https://applitools.github.io/demo/TestPages/FramesTestPage/')
  await eyes.open({t, appName: 'eyes-testcafe', testName: 'legacy api test: checkWindow region'})
  await eyes.checkWindow({target: 'region', region: {top: 100, left: 0, width: 1000, height: 200}})
  await eyes.close(true)
})
test.skip('eyes.checkWindow ignore', async t => {
  await t.navigateTo('https://applitools.github.io/demo/TestPages/FramesTestPage/')
  await eyes.open({t, appName: 'eyes-testcafe', testName: 'legacy api test: checkWindow ignore'})
  await eyes.checkWindow({
    ignore: [{selector: '#overflowing-div'}, {top: 100, left: 0, width: 1000, height: 200}],
  })
  await eyes.close(true)
})
test.skip('eyes.checkWindow floating', async t => {
  await t.navigateTo('https://applitools.github.io/demo/TestPages/FramesTestPage/')
  await eyes.open({t, appName: 'eyes-testcafe', testName: 'legacy api test: checkWindow floating'})
  await eyes.checkWindow({
    floating: [
      {
        top: 100,
        left: 0,
        width: 1000,
        height: 100,
        maxUpOffset: 20,
        maxDownOffset: 20,
        maxLeftOffset: 20,
        maxRightOffset: 20,
      },
      {
        selector: '#overflowing-div',
        maxUpOffset: 20,
        maxDownOffset: 20,
        maxLeftOffset: 20,
        maxRightOffset: 20,
      },
    ],
  })
  await eyes.close(true)
})
test.skip('eyes.checkWindow layout', async t => {
  await t.navigateTo('https://applitools.github.io/demo/TestPages/FramesTestPage/')
  await eyes.open({t, appName: 'eyes-testcafe', testName: 'legacy api test: checkWindow layout'})
  await eyes.checkWindow({
    layout: [{top: 100, left: 0, width: 1000, height: 100}, {selector: '#overflowing-div'}],
  })
  await eyes.close(true)
})
test.skip('eyes.checkWindow strict', async t => {
  await t.navigateTo('https://applitools.github.io/demo/TestPages/FramesTestPage/')
  await eyes.open({t, appName: 'eyes-testcafe', testName: 'legacy api test: checkWindow strict'})
  await eyes.checkWindow({
    strict: [{top: 100, left: 0, width: 1000, height: 100}, {selector: '#overflowing-div'}],
  })
  await eyes.close(true)
})
test.skip('eyes.checkWindow content', async t => {
  await t.navigateTo('https://applitools.github.io/demo/TestPages/FramesTestPage/')
  await eyes.open({t, appName: 'eyes-testcafe', testName: 'legacy api test: checkWindow content'})
  await eyes.checkWindow({
    content: [{top: 100, left: 0, width: 1000, height: 100}, {selector: '#overflowing-div'}],
  })
  await eyes.close(true)
})
test.skip('eyes.checkWindow accessibility', async t => {
  await t.navigateTo('https://applitools.github.io/demo/TestPages/FramesTestPage/')
  await eyes.open({
    t,
    appName: 'eyes-testcafe',
    testName: 'legacy api test: checkWindow accessibility',
  })
  await eyes.checkWindow({
    accessibility: [
      {accessibilityType: 'RegularText', selector: '#overflowing-div'},
      {accessibilityType: 'BoldText', top: 100, left: 0, width: 1000, height: 100},
    ],
  })
  await eyes.close(true)
})
test.skip('eyes.checkWindow scriptHooks', async t => {
  await t.navigateTo('https://applitools.github.io/demo/TestPages/FramesTestPage/')
  await eyes.open({
    t,
    appName: 'eyes-testcafe',
    testName: 'legacy api test: checkWindow scriptHooks',
  })
  await eyes.checkWindow({
    scriptHooks: {
      beforeCaptureScreenshot: "document.body.style.backgroundColor = 'gold'",
    },
  })
  await eyes.close(true)
})
test.skip('eyes.checkWindow sendDom', async t => {
  await t.navigateTo('https://applitools.github.io/demo/TestPages/FramesTestPage/')
  await eyes.open({t, appName: 'eyes-testcafe', testName: 'legacy api test: checkWindow sendDom'})
  await eyes.checkWindow({
    sendDom: false,
  })
  await eyes.close(false)
  // assert dom not sent
})
test.skip('eyes.waitForResults', async _t => {})
