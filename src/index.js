import style from './style.css'
import { h, Component } from 'preact';
import Side from './components/side';
import Resume from './components/resume';
if (module.hot) {
  require('preact/debug');
}


export default class App extends Component {

  render() {
    return (
      <div id="app">
        <Side />
        <Resume />
      </div>
    );
  }
}
