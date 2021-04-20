import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import QuizPage from './components/QuizPage';
import './reset.css';
import BlackWidow from './components/superHeros/BlackWidow';
import Catwoman from './components/superHeros/Catwoman';
import HarleyQuinn from './components/superHeros/HarleyQuinn';
import Hawkgirl from './components/superHeros/Hawkgirl';
import Hulk from './components/superHeros/Hulk';
import Joker from './components/superHeros/Joker';
import Loki from './components/superHeros/Loki';
import Magneto from './components/superHeros/Magneto';
import Thanos from './components/superHeros/Thanos';

function App() {
  return (
    <div className="App">
      <BlackWidow />
      <Catwoman />
      <Hawkgirl />
      <HarleyQuinn />
      <Hulk />
      <Joker />
      <Loki />
      <Magneto />
      <Thanos />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quiz">
            <QuizPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
