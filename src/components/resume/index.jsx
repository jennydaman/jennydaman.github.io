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

const Pdf = ({ fname }) => {

  // https://github.com/developit/preact-cli/issues/518
  // god bless prerender
  if (!fname)
    return (
      <noscript>
        <p><a href="/assets/resume/jzhang_resume.pdf">Direct link to jzhang_resume.pdf</a></p>
        <embed src="/assets/resume/jzhang_resume.pdf" type="application/pdf" height="600" width="100%" />
      </noscript>
    );

  let resPath = '/assets/resume/' + fname;
  return (
    <main>
      <p><a href={resPath}>Direct link to {fname}</a></p>
      <embed src={resPath} type="application/pdf" height="600" width="100%" />
    </main>
  )
}


export default class Resume extends Component {

  // linkedState doesn't work with mdc tab 
  changeFile = fname => {
    this.setState({ fname: fname });
    // HACK change tab accent color 
    if (fname === 'jzhang_brief.pdf')
      document.documentElement.style.setProperty('--mdc-theme-text-primary-on-light', '#27AE60');
    else
      document.documentElement.style.setProperty('--mdc-theme-text-primary-on-light', '#5376E0');

  }

  componentDidMount() {
    this.changeFile('jzhang_resume.pdf');
  }

  render(props, state) {
    return (
      <div>
        <div class={style.toolbar}>
          <h1>Résumé</h1>

          <div class={style.last}>
            <Tabs indicator-accent={true}>
              <Tab fname="jzhang_resume.pdf" onTabClick={this.changeFile} class={style.full}>Full</Tab>
              <Tab fname="jzhang_brief.pdf" onTabClick={this.changeFile} class={style.brief}>Brief</Tab>
            </Tabs>
          </div>
        </div>

        <p>Last updated 05 March 2018</p>
        <div class={style.divider}></div>
        <Pdf fname={state.fname} />
      </div>
    )
  }
}
