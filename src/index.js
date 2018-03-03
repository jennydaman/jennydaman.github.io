import style from './style.css'

import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Side from './components/side';

if (module.hot) {
  require('preact/debug');
}


export default class App extends Component {
	/*/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	
	handleRoute = e => {
		this.currentUrl = e.url;
	};*/

  render() {
    return (
      <div id="app">
        <Side />
        <div id="rest"><h1>hello</h1></div>
      </div>
    );
  }
}
