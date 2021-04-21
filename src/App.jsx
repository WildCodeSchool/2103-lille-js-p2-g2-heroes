import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import QuizPage from './components/QuizPage';
import './reset.css';

const SApp = styled.div`
  font-family: 'Quando', sans-serif;
<<<<<<< HEAD
  background-image: url('/background-deus-ex-02.jpg');
  height: 100vh;
  width: 100vw;
=======
  background-image: url('/background-deus-ex-01.jpg');
>>>>>>> c943b6834c429c5fbbda6b50402cc9dbccb1bedb
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
