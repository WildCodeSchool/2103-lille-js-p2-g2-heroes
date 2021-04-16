import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <Header />
      <Main />
      <BlackWidow />
      <Catwoman />
      <Hawkgirl />
      <HarleyQuinn />
      <Hulk />
      <Joker />
      <Loki />
      <Magneto />
      <Thanos />
      <Footer />
    </div>
  );
}

export default App;
