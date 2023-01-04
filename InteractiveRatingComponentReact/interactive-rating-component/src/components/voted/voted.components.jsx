import './voted.styles.css';

const Voted = () => {
    return (
        <div className="voted-container">
            <img className="thank-you" src="./img/illustration-thank-you.svg" alt="Thank you" />
            <div className="selectedRating">
                You selected <span id="selectedRating"></span> out of 5
            </div>
            <h2 className="thank-you">Thank you!</h2>
            <p className="voted-text">
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>
        </div>
    )
}

export default Voted;