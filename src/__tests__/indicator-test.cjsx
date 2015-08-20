describe 'Indicator', ->
  React = null
  TestUtils = null
  expect = null
  Indicator = null

  before ->
    React = require 'react'
    {TestUtils} = require('react/addons').addons
    {expect} = require 'chai'
    Indicator = require '../indicator'

  it 'renders without problems', ->
    indicator = TestUtils.renderIntoDocument <Indicator/>
    expect(indicator).to.exist
