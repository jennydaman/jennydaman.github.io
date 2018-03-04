import style from './style.css';
import Fab from 'preact-material-components/Fab';
import 'preact-material-components/Fab/style.css';

const Email = (props) => (
  <div class={style.email} id={props.id}>
    <a href={"mailto:" + props.email} class={style.fab}>
      <Fab ripple><img src="/assets/ic_email_white_24px.svg" /></Fab>
    </a>
    <a href={"mailto:" + props.email} class={style.tooltip}>
      Email Me
    </a>
  </div>
);

export default Email;
