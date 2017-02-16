[![Build Status](https://travis-ci.org/horaklukas/loin.svg)](https://travis-ci.org/horaklukas/loin)

Loin
====

Very simple **lo**ading **in**dicator React component that just show "loading" message and dot progress bar.

Usage
-----

```javascript
var React = require('react');
var LoadingIndicator = require('loin');

React.createClass({
  render: function() {
  	return (
  		<div>
  			<LoadingIndicator message="Loading data" />
  		</div>
  	);
  }
});
```

Component props
---------------

`message` - Text shown before the dot progress bar, default is "Loading"