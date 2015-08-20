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
    @fakeTimer = sinon.useFakeTimers()

  after ->
    @fakeTimer.restore()

  it 'should render without problems', ->
    indicator = TestUtils.renderIntoDocument <Indicator/>
    expect(indicator).to.exist

  it 'should use supplied loading message', ->
    indicator = TestUtils.renderIntoDocument <Indicator message="Nacitam" />
    expect(indicator.getDOMNode().textContent).to.equal 'Nacitam'

  it 'should use default loading message if no supplied', ->
    indicator = TestUtils.renderIntoDocument <Indicator />
    expect(indicator.getDOMNode().textContent).to.equal 'Loading'

  describe 'ellipsis', ->
    beforeEach ->
      @fakeTimer = sinon.useFakeTimers()

    afterEach ->
      @fakeTimer.restore()

    it 'should display one dot after first tick', ->
      indicator = TestUtils.renderIntoDocument <Indicator />
      @fakeTimer.tick Indicator.TICK + 20

      expect(indicator.getDOMNode().textContent).to.equal 'Loading.'

    it 'should display two dots after second tick', ->
      indicator = TestUtils.renderIntoDocument <Indicator />
      @fakeTimer.tick Indicator.TICK * 2 + 20

      expect(indicator.getDOMNode().textContent).to.equal 'Loading..'

    it 'should display two dots after third tick', ->
      indicator = TestUtils.renderIntoDocument <Indicator />
      @fakeTimer.tick Indicator.TICK * 3 + 20

      expect(indicator.getDOMNode().textContent).to.equal 'Loading...'

    it 'should reset dots count and display no dots after fourth tick', ->
      indicator = TestUtils.renderIntoDocument <Indicator />
      @fakeTimer.tick Indicator.TICK * 4 + 20

      expect(indicator.state).to.have.property 'dotsCount', 0
      expect(indicator.getDOMNode().textContent).to.equal 'Loading'
