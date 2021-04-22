import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import QuizPage from './components/QuizPage';
import './reset.css';

const SApp = styled.div`
  font-family: 'Quando', sans-serif;
  background-image: url('/background-deus-ex-02.jpg');
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
        </Switch>
      </Router>
    </SApp>
  );
}

export default App;
