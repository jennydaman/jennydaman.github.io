import { h } from 'preact';
import Side from './components/side';
import Resume from './components/resume';

import Fab from 'preact-material-components/Fab';
import 'preact-material-components/Fab/style.css';
import 'preact-material-components/Icon/style.css';
import './style.css';

if (module.hot) {
  require('preact/debug');
}

const App = () => (
  <div>
    <div id="app">
      <Side />
      <Resume />
    </div>
    <div id="corner">
      <span id="tooltip">Email Me</span>
      <Fab ripple><a href="mailto:jenni_zh@protonmail.com">
        <img src="/assets/ic_email_white_24px.svg" />
      </a></Fab>
    </div>
  </div>
);

export default App;
