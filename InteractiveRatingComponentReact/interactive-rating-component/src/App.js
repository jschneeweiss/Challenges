import './App.css';
import Circle from './components/circle/circle.component';

function App() {
  const ratingNumbers = [1, 2, 3, 4, 5];
  const svgSource = './icon-star.svg';

  return (
    <div className='main-container'>
      <Circle svg='true' svgSource={svgSource}></Circle>
      <h1>How did we do?</h1>

      <p className="main-text">
        Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!
      </p>
      <Circle svg='false' numbers={ratingNumbers}></Circle>      

      <button className='button'>SUBMIT</button>

      {/* You selected ** out of 5

      Thank you!

      We appreciate you taking the time to give a rating. If you ever need more support,
      don’t hesitate to get in touch! */}
    </div>
  );
}

export default App;
