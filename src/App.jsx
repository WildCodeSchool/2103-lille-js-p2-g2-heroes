import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './reset.css';
import BlackWidow from './components/superHeros/BlackWidow';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <BlackWidow />
    </div>
  );
}

export default App;
