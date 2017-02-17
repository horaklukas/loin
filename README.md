Loin
====

[![Build Status](https://travis-ci.org/horaklukas/loin.svg?branch=master)](https://travis-ci.org/horaklukas/loin)

Few types of simple **lo**ading **in**dicators as a React component.

Install
-------

```
npm install --save horaklukas/loin
```

Indicator types
---------------

Available indicator types and their props

### `Dots`

  `message` {string} Text shown before the dot progress bar, default is "Loading"


### `Columns`

  `count` {number} Number of columns

  `color` {string} Color of columns

Usage
------

```javascript
import React from 'react';
import {Dots, Columns} from 'loin';

class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <Dots message="Loading data" />
        <Columns color="blue" count={6} />
      </div>
    );
  }
}
```
