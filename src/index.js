import { h, Component } from 'preact';
import Side from './components/side';
import Resume from './components/resume';

import Fab from 'preact-material-components/Fab';
import 'preact-material-components/Fab/style.css';
import 'preact-material-components/Icon/style.css';
import style from './style.css'

if (module.hot) {
  require('preact/debug');
}


export default class App extends Component {

  render() {
    return (
      <div>
        <div id="app">
          <Side />
          <Resume />
        </div>
        <div id="corner">
          <span id="tooltip">Email Me</span>
          <Fab ripple={true}><a href="mailto:jenni_zh@protonmail.com">
            <img src="/assets/ic_email_white_24px.svg" />
          </a></Fab>
        </div>
      </div>

    );
  }
}
