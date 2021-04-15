import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './reset.css';
import SuperHerosApi from './components/SuperHerosApi';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <SuperHerosApi />
    </div>
  );
}

export default App;
