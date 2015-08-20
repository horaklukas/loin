describe 'LoadingIndicator', ->
  React = null
  TestUtils = null
  expect = null
  Indicator = null

  before ->
    React = require 'react'
    {TestUtils} = require('react/addons').addons
    {expect} = require 'chai'
    Indicator = require '../indicator'

  it 'should render without problems', ->
    indicator = TestUtils.renderIntoDocument <Indicator/>
    expect(indicator).to.exist

  it 'should use supplied loading message', ->
    indicator = TestUtils.renderIntoDocument <Indicator message="Nacitam" />
    expect(indicator.getDOMNode().textContent).to.equal 'Nacitam'

  it 'should use default loading message if no supplied', ->
    indicator = TestUtils.renderIntoDocument <Indicator />
    expect(indicator.getDOMNode().textContent).to.equal 'Loading'

