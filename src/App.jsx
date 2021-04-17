import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import QuizPage from './components/QuizPage';
import './reset.css';

function App() {
  return (
    <div className="App">
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
