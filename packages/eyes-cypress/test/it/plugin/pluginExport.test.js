'use strict';
const {describe, it, beforeEach, afterEach} = require('mocha');
const {expect} = require('chai');
const makePluginExport = require('../../../src/plugin/pluginExport');
const {promisify: p} = require('util');
const psetTimeout = p(setTimeout);

describe('pluginExport', () => {
  let prevEnv;

  async function startServer() {
    return {
      eyesPort: 123,
    };
  }

  beforeEach(() => {
    prevEnv = process.env;
    process.env = {};
  });

  afterEach(() => {
    process.env = prevEnv;
  });

  it('works', async () => {
    const pluginExport = makePluginExport({startServer, config: {}});

    const __module = {
      exports: (_on, config) => {
        x = config;
        return {bla: `ret_${config}`};
      },
    };

    const on = (_event, _callback) => {};

    let x;

    pluginExport(__module);
    const ret = await __module.exports(on, 'first');

    expect(x).to.equal('first');
    expect(ret).to.eql({
      bla: 'ret_first',
      eyesPort: 123,
      eyesDisableBrowserFetching: false,
      eyesFailCypressOnDiff: true,
      eyesIsDisabled: false,
    });

    const ret2 = await __module.exports(on, 'second');
    expect(x).to.equal('second');
    expect(ret2).to.eql({
      bla: 'ret_second',
      eyesPort: 123,
      eyesDisableBrowserFetching: false,
      eyesFailCypressOnDiff: true,
      eyesIsDisabled: false,
    });
  });

  it('handles async module.exports', async () => {
    const pluginExport = makePluginExport({startServer, config: {}});
    const __module = {
      exports: async () => {
        await psetTimeout(0);
        return {bla: 'bla'};
      },
    };

    pluginExport(__module);
    const ret = await __module.exports(() => {});
    expect(ret).to.eql({
      bla: 'bla',
      eyesPort: 123,
      eyesDisableBrowserFetching: false,
      eyesFailCypressOnDiff: true,
      eyesIsDisabled: false,
    });
  });

  it('works with disabled eyes', async () => {
    const pluginExport = makePluginExport({startServer, config: {isDisabled: true}});
    const __module = {
      exports: () => ({bla: 'ret'}),
    };

    pluginExport(__module);
    const ret = await __module.exports();
    expect(ret).to.eql({
      bla: 'ret',
      eyesPort: 123,
      eyesIsDisabled: true,
      eyesDisableBrowserFetching: false,
      eyesFailCypressOnDiff: true,
    });
  });

  it('works with dont fail cypress on diff', async () => {
    const pluginExport = makePluginExport({startServer, config: {failCypressOnDiff: false}});
    const __module = {
      exports: () => ({bla: 'ret'}),
    };

    pluginExport(__module);
    const ret = await __module.exports();
    expect(ret).to.eql({
      bla: 'ret',
      eyesPort: 123,
      eyesDisableBrowserFetching: false,
      eyesIsDisabled: false,
      eyesFailCypressOnDiff: false,
    });
  });

  it('works with eyes timeout', async () => {
    const pluginExport = makePluginExport({startServer, config: {eyesTimeout: 1234}});
    const __module = {
      exports: () => ({bla: 'ret'}),
    };

    pluginExport(__module);
    const ret = await __module.exports();
    expect(ret).to.eql({
      bla: 'ret',
      eyesPort: 123,
      eyesDisableBrowserFetching: false,
      eyesIsDisabled: false,
      eyesFailCypressOnDiff: true,
      eyesTimeout: 1234,
    });
  });

  it('works with eyes disableBrowserFetching', async () => {
    const pluginExport = makePluginExport({startServer, config: {disableBrowserFetching: true}});
    const __module = {
      exports: () => ({bla: 'ret'}),
    };

    pluginExport(__module);
    const ret = await __module.exports();
    expect(ret).to.eql({
      bla: 'ret',
      eyesPort: 123,
      eyesDisableBrowserFetching: true,
      eyesIsDisabled: false,
      eyesFailCypressOnDiff: true,
    });
  });
});
