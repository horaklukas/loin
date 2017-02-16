import ReactDom from 'react-dom';
import React from 'react';
import {Dots, Columns} from '..';

let div = document.createElement('div');
div.id = 'example';
document.body.appendChild(div);

ReactDom.render(
	<div>
    <h1>Loading indicator</h1>
    <h2>Dots type</h2>
    <Dots message={'Example loading'} />
    <h2>Columns type</h2>
		<Columns count={4} color={'rgba(0,0,255,0.3)'} />
	</div>,
	document.getElementById('example')
);