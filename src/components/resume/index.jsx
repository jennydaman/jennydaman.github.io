import { h, Component } from 'preact';

import Tabs from 'preact-material-components/Tabs';
import 'preact-material-components/Tabs/style.css';

import style from './style.css'

class Tab extends Component {
  handleClick = () => {
    this.props.onTabClick(this.props.fname);
  }
  render() {
    return (
      <Tabs.Tab onClick={this.handleClick}>{this.props.children}</Tabs.Tab>
    )
  }
}


export default class Resume extends Component {

  state = { fname: 'jzhang_resume.pdf' }

  changeFile = fname => {
    this.setState({ fname: fname });
  }

  render() {

    let resPath = '/assets/resume/' + this.state.fname;
    return (
      <main>
        <div class={style.toolbar}>
          <h1>Résumé</h1>

          <div class={style.last}>
            <Tabs indicator-accent={true}>
              <Tab fname="jzhang_resume.pdf" onTabClick={this.changeFile} active={true} class={style.full}>Full</Tab>
              <Tab fname="jzhang_brief.pdf" onTabClick={this.changeFile} class={style.brief}>Brief</Tab>
            </Tabs>
          </div>
        </div>

        <p>Last updated 01 March 2018</p>

        <div class={style.divider}></div>
        <p><a href={resPath}>Direct link to {this.state.fname}</a></p>
        <embed src={resPath} type="application/pdf" height="600" width="100%" />
      </main>
    )
  }
}