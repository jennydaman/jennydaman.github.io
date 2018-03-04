import { h } from 'preact';
import Side from './components/side';
import Resume from './components/resume';
import Email from './components/email';
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
    <Email email="jenni_zh@protonmail.com" id="corner" />
  </div>
);

export default App;
