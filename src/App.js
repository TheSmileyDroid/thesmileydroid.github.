import foto from './Foto-de-perfil.png';
import discord from './discord-logo.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { DiGithubBadge } from "react-icons/di";
import { SiLinkedin } from "react-icons/si";
import { IconContext } from "react-icons"

function Foto(){
  return (
    <div className="Foto-row">
      <div className="Foto-div">
        <img src={foto} className="Foto" alt="Foto de perfil" />
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Link to="/">Sobre mim</Link>
        <Link to="/projetos">Projetos</Link>
      </header>
      <Route exact path="/" component={Home}/>
      <Route path="/projetos" component={Projetos}/>
      </Router>
    </div>
  );
}

function Home() {
  return (
  <div className="Info">
    <Foto />
    <h2>Gabriel Henrique Silva</h2>
    <IconContext.Provider value={{ className: "icon", size: 40}}>
      <div className="icons-row">
          <a rel="noreferrer" target="_blank" href="https://github.com/TheSmileyDroid"><DiGithubBadge /></a>
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/gabriel-henrique-silva-439774210"><SiLinkedin /></a>
      </div>
    </IconContext.Provider>
  </div>
      )
}

function Projetos() {
  return (
    <div className="Projetos-page">
      <Project name="Bot para Discord" img={discord} url="https://github.com/TheSmileyDroid/SmileyDroidLoco"/>
    </div>
  )
}

function Project(props) {
  return (
    <div className="Projeto">
      <a href={props.url}>
        <img src={props.img}></img>
      </a>
      <h3>{props.name}</h3>
    </div>
  )
}

export default App;
