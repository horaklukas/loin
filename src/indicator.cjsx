React = require 'react'

LoadingIndicator = React.createClass
  getDefaultProps: ->
    message: 'Loading'

  render: ->
    <span>{@props.message}</span>

module.exports = LoadingIndicator