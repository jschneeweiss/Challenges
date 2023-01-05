import { useLocation } from 'react-router-dom';

import './voted.styles.css';

const Voted = () => {    
    const svgSource = './illustration-thank-you.svg';
    const location = useLocation();

    return (
        <div className='voted-container'>
            <img className='thank-you' src={svgSource} alt='Thank you' />            
            <div className='selectedRating'>
                You selected <span id="selectedRating">{location.state.rating}</span> out of 5
            </div>
            <h2 className='thank-you'>Thank you!</h2>
            <p className='voted-text'>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>
        </div>
    )
}

export default Voted;