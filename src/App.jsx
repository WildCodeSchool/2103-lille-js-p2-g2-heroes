import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import QuizPage from './components/QuizPage';
import Results from './components/Results';
import Fight from './components/Fight';
import './reset.css';

const SApp = styled.div`
  font-family: 'Quando', sans-serif;
  background-image: url('/backgroud-modify.jpg');
  min-height: 100vh;
  min-width: 100vw;
`;

function App() {
  return (
    <SApp>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quiz">
            <QuizPage />
          </Route>
          <Route path="/results/:int/:spe/:str/:pow">
            <Results />
          </Route>
          <Route path="/fight">
            <Fight />
          </Route>
        </Switch>
      </Router>
    </SApp>
  );
}

export default App;
