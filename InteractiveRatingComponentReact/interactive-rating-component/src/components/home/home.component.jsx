import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import starSvg from '../../img/icon-star.svg';
import Circle from '../circle/circle.component';

const Home = () => {
    const ratingNumbers = [1, 2, 3, 4, 5];    
    const navigate = useNavigate();

    const [rating, setRating] = useState(0); 

    const setClickedRatingFunction = (rating) => {
        setRating(rating);
    }

    const navigateToVoted = () => {
        if (rating === 0)
            alert("You do not choose a rating number!");
        else
            navigate('/voted', { state: { rating: rating } });
    }

    return (
        <div className='main-container'>
            <Circle svg='true' svgSource={starSvg}></Circle>
            <h1>How did we do?</h1>

            <p className="main-text">
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>
            <Circle svg='false' rating={setClickedRatingFunction} numbers={ratingNumbers}></Circle>
            
            <button onClick={navigateToVoted} className='button'>SUBMIT</button>
        </div>
    );
}

export default Home;