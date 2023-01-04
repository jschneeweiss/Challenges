import { useNavigate } from 'react-router-dom';

import Circle from '../circle/circle.component';


const Home = () => {
    const ratingNumbers = [1, 2, 3, 4, 5];
    const svgSource = './icon-star.svg';
    const navigate = useNavigate();

    return (
        <div className='main-container'>
            <Circle svg='true' svgSource={svgSource}></Circle>
            <h1>How did we do?</h1>

            <p className="main-text">
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>
            <Circle svg='false' numbers={ratingNumbers}></Circle>

            <button onClick={() => navigate('/voted')} className='button'>SUBMIT</button>
        </div>
    );
}

export default Home;