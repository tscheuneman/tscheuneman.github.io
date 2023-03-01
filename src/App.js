import { useTyping } from './utils/useTyping';
import './App.css';

const headingContent = `Hi! My name is Thomas Scheuneman.  I'm a fullstack Software Engineer currently working at GoodRx.`;

function App() {

  const [typedHeading, headingIsDone] = useTyping(headingContent, 100, 150);

  return (
    <div className="App">
      <div className="container">
        <h1>{ typedHeading }</h1>
        <div id="info" className={headingIsDone ? 'show' : null}>
          <hr />
          <p>
            Something goes here
          </p>
          <h3> Interesting Projects </h3>
            WIP
          <h3> Find Me </h3>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/tscheuneman"> Github </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/tscheuneman"> Linkedin </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
