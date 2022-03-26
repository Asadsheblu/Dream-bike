
import './App.css';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';
import Shop from './Components/Shop/Shop';
import Slider from './Components/Shop/Slider/Slider';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Slider></Slider>
     <Shop></Shop>
     <Question></Question>
    </div>
  );
}

export default App;
