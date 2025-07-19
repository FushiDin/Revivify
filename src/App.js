import './App.css';
import Main from './Pages/Main/Main';
import MainSecond from './Pages/MainSecond/MainSecond';
import MainThird from './Pages/MainThird/MainThird';
import Footer from './wigets/Footer/Footer';
import Header from './wigets/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <MainSecond />
      <MainThird />
      <Footer />
    </div>
  );
}

export default App;
