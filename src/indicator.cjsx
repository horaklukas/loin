React = require 'react'

LoadingIndicator = React.createClass
  statics:
    TICK: 500

  componentWillMount: ->
    @timer = setInterval @setDotsCount, LoadingIndicator.TICK

  componentWillUnmount: ->
    clearInterval @timer

  setDotsCount: ->
    count = if @state.dotsCount is 3 then 0 else @state.dotsCount + 1

    @setState dotsCount: count

  getDefaultProps: ->
    message: 'Loading'

  getInitialState: ->
    dotsCount: 0

  render: ->
    dots = ('.' for i in [0...@state.dotsCount]).join ''

    <span>{@props.message}{dots}</span>

module.exports = LoadingIndicator