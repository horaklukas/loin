import ReactDom from 'react-dom';
import React from 'react';
import {Dots} from '..';

let div = document.createElement('div');
div.id = 'example';
document.body.appendChild(div);

ReactDom.render(
	<div>
		<Dots />
	</div>,
	document.getElementById('example')
);