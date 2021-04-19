import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import QuizPage from './components/QuizPage';
import './reset.css';

const SApp = styled.div`
  background-image: url('/background-deus-ex-02.jpg');
`;

function App() {
  return (
    <SApp>
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
    </SApp>
  );
}

export default App;
