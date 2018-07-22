const { Gallery } = require('../src/app');
const testAva = require('ava');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM();
const window = dom.window;
const document = window.document;
global.document = document;

testAva('is function, 1', (assert) => {
  assert.true(typeof Gallery === 'object')
})

testAva('not an arrow fucntion, 1', (assert) => {
  assert.notThrows(() => new Gallery({locations: ''}), "Nie jest arrow function")
})

testAva('has options arg, 2', (assert) => {
  assert.is(Gallery.length, 1, "Ma argument")
})

testAva('nas new property, 3', (assert) => {
  const obj = new Gallery({location: "ppp"});
  assert.is(obj.location, 'ppp')
})

testAva('mock DOM, 4', (assert) => {
  assert.is(typeof document, 'object')
  assert.is(typeof document.createElement, 'function');
})

testAva('type of passed elemnet, 5', (assert) => {
  const element = document.createElement('DIV');
  const obj = new Gallery({location: element});
  assert.true(obj.location instanceof window.HTMLElement);
})
