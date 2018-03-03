import { h, Component } from 'preact';
import style from './style.css'

export default class Side extends Component {
  render() {
    return (
      <header>

        <section class={style.title}>
          <h1>Jennings Zhang</h1>
          jennydaman.github.io | DFTBA
        </section>

        <img class={style.avatar} src="/assets/square_swan.jpg" alt="origami swan" />

        <section class={style.links}>
          <h2>Links</h2>

          <a class={style.link} href="https://github.com/jennydaman/">
            <img src="/assets/GitHub-Mark.png" />
            <span>View My GitHub Profile
            <br />github.com/jennydaman</span>
          </a>

          <a class={style.link} href="https://twlinux.github.io/">
            <img src="https://twlinux.github.io/img/darkred-terminal.png" />
            <span>Red Team (Linux Club)
            <br />Club at Wootton HS</span>
          </a>

          <a class={style.link} href="https://chrome.google.com/webstore/detail/mind-matter/ailffedpjgpjbdadlieaccchpcdiafjc">
            <img src="https://raw.githubusercontent.com/jennydaman/mindmatter/master/extension/assets/brain-in-pot64.png" />
            <span>Mind Matter
            <br />Chrome Extension</span>
          </a>
          <p><br /><a href="https://preactjs.com">Built with <em>Preact</em>{" \ud83d\ude80"}</a></p>
        </section>
      </header>
    )
  }
}