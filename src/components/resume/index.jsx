import { h, Component } from 'preact';
const Pdf = ({ fname }) => {
  let resPath = '/assets/resume/' + fname;
  return (
    <main>
      <p><a href={resPath}>Direct link to {fname}</a></p>
      <embed src={resPath} type="application/pdf" height="600" width="100%" />
    </main>
  )
}

export default class Resume extends Component {
  render(props, state) {
    return (
      <main>
        <h1>Résumé</h1>
        <p>Last updated 22 May 2018</p>
        <div style="border-bottom: solid 1px #ccc;"></div>
        <Pdf fname="jzhang_resume.pdf" />
      </main>
    )
  }
}
